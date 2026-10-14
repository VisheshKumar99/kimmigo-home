/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in the `out/` directory (for Cloudflare Pages,
  // or any static host). The app has no server-side features, so this is safe.
  output: "export",
  // Static hosts serve from the filesystem; trailing slashes make clean URLs
  // resolve to index.html files reliably.
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; disable it for static export.
    unoptimized: true,
  },
};

export default nextConfig;
