"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Gsap = typeof import("gsap").gsap;
type ScrollTriggerType = typeof import("gsap/ScrollTrigger").ScrollTrigger;
type SplitTextType = typeof import("gsap/SplitText").SplitText;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function whenFontsReady() {
  if (!document.fonts?.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, 900);
    }),
  ]);
}

/**
 * Chama `start` quando a página terminou de carregar e o navegador está
 * ocioso, ou antes disso se a pessoa rolar/tocar a tela. Assim o GSAP
 * (~50 KB) não disputa a CPU com a primeira pintura e a hidratação.
 */
function whenIdleOrInteraction(start: () => void) {
  let done = false;
  const events = ["scroll", "pointerdown", "touchstart", "keydown", "wheel"];
  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    start();
  };
  const idle = () => {
    // Safari ainda não tem requestIdleCallback.
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(run, { timeout: 1200 });
    } else {
      setTimeout(run, 200);
    }
  };
  const cleanup = () => {
    events.forEach((e) => window.removeEventListener(e, run));
    window.removeEventListener("load", idle);
  };

  events.forEach((e) => window.addEventListener(e, run, { passive: true, once: true }));
  if (document.readyState === "complete") idle();
  else window.addEventListener("load", idle, { once: true });

  return () => {
    done = true;
    cleanup();
  };
}

function setupMotion(
  rootEl: HTMLElement,
  gsap: Gsap,
  ScrollTrigger: ScrollTriggerType,
  SplitText: SplitTextType,
  isCancelled: () => boolean,
  addToContext: (fn: () => void) => void,
) {
  gsap.to("[data-scroll-progress]", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      scrub: 0.2,
    },
  });

  ScrollTrigger.create({
    start: 24,
    onUpdate: (self) => {
      rootEl
        .querySelector("[data-site-header]")
        ?.classList.toggle("is-compact", self.scroll() > 24);
    },
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal]", rootEl).forEach((el) => {
    const type = el.dataset.reveal ?? "up";

    if (type === "clip") {
      gsap.fromTo(
        el,
        { clipPath: "inset(10% 10% 10% 10%)", scale: 1.06 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );
      return;
    }

    const from: gsap.TweenVars = { opacity: 0 };
    if (type === "up") from.y = 40;
    if (type === "left") from.x = -36;
    if (type === "right") from.x = 36;
    if (type === "scale") from.scale = 0.94;

    gsap.fromTo(el, from, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });

  gsap.utils
    .toArray<HTMLElement>("[data-reveal-stagger]", rootEl)
    .forEach((parent) => {
      const play = parent.dataset.revealStagger;
      const items = parent.children;
      const tween: gsap.TweenVars = {
        y: 0,
        opacity: 1,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
      };

      // "load" (menu do topo) anima em CSS, ver globals.css.
      if (play === "load") return;

      gsap.fromTo(
        items,
        { y: 28, opacity: 0 },
        {
          ...tween,
          scrollTrigger: { trigger: parent, start: "top 84%", once: true },
        },
      );
    });

  gsap.utils.toArray<HTMLElement>("[data-draw]", rootEl).forEach((el) => {
    if (el.closest("[data-hero-kicker]")) return;

    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: el.classList.contains("origin-right")
          ? "right center"
          : "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-parallax]", rootEl).forEach((el) => {
    const amount = Number(el.dataset.parallax ?? 10);
    // A entrada do hero (CSS) usa `translate`; o GSAP leria o valor do meio
    // da animação como deslocamento fixo. Zera para o parallax só mexer no y.
    gsap.set(el, { x: 0, translate: "none" });
    gsap.to(el, {
      yPercent: amount,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const steps = rootEl.querySelector("[data-steps]");
  if (steps) {
    gsap.fromTo(
      rootEl.querySelectorAll("[data-step-num]"),
      { scale: 0.45, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: steps, start: "top 78%", once: true },
      },
    );
  }

  // Callbacks assíncronos ficam fora do gsap.context; addToContext garante
  // que os SplitText criados aqui também sejam desfeitos no cleanup.
  whenFontsReady().then(() => {
    if (isCancelled()) return;

    // Cada título só é dividido (SplitText) quando chega perto da tela.
    // Dividir todos de uma vez no carregamento travava a CPU do celular
    // (era a maior tarefa longa do TBT no PageSpeed).
    const splitTitle = (el: HTMLElement) => {
      const mode = el.dataset.split ?? "words";

      try {
        SplitText.create(el, {
          type: mode === "chars" ? "chars,words,lines" : "words,lines",
          mask: "lines",
          charsClass: "char",
          wordsClass: "word",
          smartWrap: true,
          autoSplit: true,
          aria: "auto",
          onSplit(self) {
            gsap.set(el, { opacity: 1 });
            const targets = mode === "chars" ? self.chars : self.words;

            return gsap.from(targets, {
              yPercent: 116,
              duration: mode === "chars" ? 0.82 : 0.72,
              ease: "power3.out",
              stagger: mode === "chars" ? 0.02 : 0.05,
              scrollTrigger: {
                trigger: el,
                start: "top 86%",
                once: true,
              },
            });
          },
        });
      } catch {
        gsap.set(el, { opacity: 1 });
      }
    };

    addToContext(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            addToContext(() => splitTitle(entry.target as HTMLElement));
          });
        },
        { rootMargin: "0px 0px 50% 0px" },
      );

      gsap.utils
        .toArray<HTMLElement>("[data-split]", rootEl)
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });
  });
}

export default function MotionRoot({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootEl = root.current;
    if (!rootEl) return;

    if (prefersReducedMotion()) {
      rootEl.classList.remove("js-motion");
      return;
    }

    let cancelled = false;
    let ctx: gsap.Context | undefined;

    // Se o GSAP não carregar, nada fica escondido.
    const failsafe = window.setTimeout(() => {
      if (!ctx) rootEl.classList.remove("js-motion");
    }, 8000);

    const stopWaiting = whenIdleOrInteraction(() => {
      Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ])
        .then(([{ gsap }, { ScrollTrigger }, { SplitText }]) => {
          if (cancelled) return;
          gsap.registerPlugin(ScrollTrigger, SplitText);
          const context = gsap.context(() => {}, rootEl);
          ctx = context;
          context.add(() => {
            setupMotion(
              rootEl,
              gsap,
              ScrollTrigger,
              SplitText,
              () => cancelled,
              (fn) => context.add(fn),
            );
          });
        })
        .catch(() => {
          rootEl.classList.remove("js-motion");
        });
    });

    return () => {
      cancelled = true;
      stopWaiting();
      window.clearTimeout(failsafe);
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} className="js-motion flex min-h-full flex-col">
      <div
        data-scroll-progress
        className="scroll-progress pointer-events-none fixed top-0 left-0 z-[60] h-[2px] w-full bg-gold"
        aria-hidden
      />
      {children}
    </div>
  );
}
