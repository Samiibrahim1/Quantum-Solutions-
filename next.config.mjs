/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  output: 'export',
  basePath: '/Quantum-Solutions-',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;