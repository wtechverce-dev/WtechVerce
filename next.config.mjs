/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack off for production build — webpack use hoga
  experimental: {},
  // Trailing slash off (canonical URL ke liye better)
  trailingSlash: false,
  // Compression on for performance
  compress: true,
  // PoweredByHeader off (security best practice)
  poweredByHeader: false,
};

export default nextConfig;
