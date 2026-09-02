import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits a self-contained `out/` folder
  // that can be hosted on any static host (Netlify, GitHub Pages, S3, nginx).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
