import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next doesn't infer a parent
  // directory when multiple lockfiles exist on the machine.
  turbopack: { root: projectRoot },
  images: {
    // Royalty-free placeholder photography is served from Unsplash so that
    // next/image can optimize it. Swap these for real project photos dropped
    // into /public/images and reference them with leading-slash paths.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
