/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile ESM-only packages so they work correctly during SSR
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
