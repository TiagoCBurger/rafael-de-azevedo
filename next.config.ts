import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Existe um package-lock.json acima deste diretório; sem isso o Turbopack
  // infere a raiz errada e avisa a cada build.
  turbopack: {
    root: path.join(import.meta.dirname, "."),
  },
};

export default nextConfig;
