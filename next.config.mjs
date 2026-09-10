import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // A stray lockfile in the home directory makes Next infer the wrong root.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
