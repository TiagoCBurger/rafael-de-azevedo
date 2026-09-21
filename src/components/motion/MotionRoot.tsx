"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
}

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

export default function MotionRoot({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rootEl = root.current;
      if (!rootEl) return;

      if (prefersReducedMotion()) {
        rootEl.classList.remove("js-motion");
        return;
      }

      gsap.fromTo(
        "[data-site-header]",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power1.out" },
      );

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

          if (play === "load") {
            gsap.fromTo(items, { y: 28, opacity: 0 }, { ...tween, delay: 0.25 });
          } else {
            gsap.fromTo(
              items,
              { y: 28, opacity: 0 },
              {
                ...tween,
                scrollTrigger: { trigger: parent, start: "top 84%", once: true },
              },
            );
          }
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

      const heroHeading = rootEl.querySelector<HTMLElement>(
        "[data-split][data-split-play='load']",
      );

      let cancelled = false;
      const failsafe = window.setTimeout(() => {
        if (heroHeading && getComputedStyle(heroHeading).opacity === "0") {
          gsap.set(heroHeading, { opacity: 1 });
        }
      }, 1800);

      whenFontsReady().then(() => {
        if (cancelled) return;

        try {
          if (heroHeading) {
            SplitText.create(heroHeading, {
              type: "chars,words,lines",
              mask: "lines",
              charsClass: "char",
              wordsClass: "word",
              smartWrap: true,
              autoSplit: true,
              aria: "auto",
              onSplit(self) {
                gsap.set(heroHeading, { opacity: 1 });

                const tl = gsap.timeline({ delay: 0.08 });
                const kicker = rootEl.querySelector("[data-hero-kicker]");
                const kickerLine = rootEl.querySelector(
                  "[data-hero-kicker] [data-draw]",
                );
                const copy = rootEl.querySelector("[data-hero-copy]");
                const items = rootEl.querySelectorAll("[data-hero-item]");
                const cta = rootEl.querySelector("[data-hero-cta]");
                const note = rootEl.querySelector("[data-hero-note]");
                const visual = rootEl.querySelector("[data-hero-visual]");

                if (kicker) {
                  tl.fromTo(
                    kicker,
                    { opacity: 0, y: 12 },
                    { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
                    0,
                  );
                }
                if (kickerLine) {
                  tl.fromTo(
                    kickerLine,
                    { scaleX: 0 },
                    { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
                    0.08,
                  );
                }

                tl.from(
                  self.chars,
                  {
                    yPercent: 118,
                    stagger: 0.018,
                    duration: 0.8,
                    ease: "power4.out",
                  },
                  0.1,
                );

                if (copy) {
                  tl.fromTo(
                    copy,
                    { y: 28, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
                    0.45,
                  );
                }
                if (items.length) {
                  tl.fromTo(
                    items,
                    { y: 18, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.08,
                      duration: 0.5,
                      ease: "power3.out",
                    },
                    0.62,
                  );
                }
                if (cta) {
                  tl.fromTo(
                    cta,
                    { y: 18, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
                    0.78,
                  );
                }
                if (note) {
                  tl.fromTo(
                    note,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5, ease: "power2.out" },
                    0.95,
                  );
                }
                if (visual) {
                  tl.fromTo(
                    visual,
                    { opacity: 0, x: 40 },
                    { opacity: 1, x: 0, duration: 1.05, ease: "power3.out" },
                    0.2,
                  );
                }

                return tl;
              },
            });
          }

          gsap.utils
            .toArray<HTMLElement>(
              "[data-split]:not([data-split-play='load'])",
              rootEl,
            )
            .forEach((el) => {
              const mode = el.dataset.split ?? "words";

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
            });
        } catch {
          rootEl
            .querySelectorAll<HTMLElement>("[data-split], [data-hero-copy], [data-hero-item], [data-hero-cta], [data-hero-note], [data-hero-visual], [data-hero-kicker]")
            .forEach((el) => gsap.set(el, { opacity: 1, y: 0, x: 0 }));
        }
      });

      return () => {
        cancelled = true;
        window.clearTimeout(failsafe);
      };
    },
    { scope: root },
  );

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
