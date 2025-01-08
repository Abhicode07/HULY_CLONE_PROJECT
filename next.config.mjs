/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true,       // Enables SWC-based minification for faster builds
  experimental: {
    outputStandalone: true, // Ensures compatibility with Netlify
  },
  images: {
    domains: ['example.com'], // Replace with your image domains if using Next.js Image
  },
};

export default nextConfig;
