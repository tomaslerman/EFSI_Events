/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/events',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

