/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wtechverce.com',
      },
    ],
  },
};

export default nextConfig;
