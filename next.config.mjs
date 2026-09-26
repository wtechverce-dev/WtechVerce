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
  async redirects() {
    return [
      {
        source: '/services/digital-marketing',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
