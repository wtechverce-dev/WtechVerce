/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.wtechverce.com',
          },
        ],
        destination: 'https://wtechverce.com/:path*',
        permanent: true,
      },
      {
        source: '/services/digital-marketing',
        destination: '/services/seo-services',
        permanent: true,
      },
      {
        source: '/services/software-development',
        destination: '/services/custom-software-development',
        permanent: true,
      },
      {
        source: '/services/seo',
        destination: '/services/seo-services',
        permanent: true,
      },
      {
        source: '/services/saas-development',
        destination: '/services/saas-development-company',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/services/web-development-services',
        permanent: true,
      },
      {
        source: '/services/mobile-app-development',
        destination: '/services/mobile-app-development-services',
        permanent: true,
      },
      {
        source: '/services/wordpress-development',
        destination: '/services/wordpress-development-services',
        permanent: true,
      },
      {
        source: '/services/ecommerce-development',
        destination: '/services/ecommerce-development-services',
        permanent: true,
      },
      {
        source: '/services/ui-ux-design',
        destination: '/services/ui-ux-design-services',
        permanent: true,
      },
      {
        source: '/services/website-redesign',
        destination: '/services/website-redesign-services',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/blog/custom-web-development-small-business',
        destination: '/services/web-development-services',
        permanent: true,
      },
      {
        source: '/blog/how-long-does-website-development-take',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/blog/what-is-custom-web-development',
        destination: '/services/web-development-services',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
