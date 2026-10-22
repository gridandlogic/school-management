/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/dashboard", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
