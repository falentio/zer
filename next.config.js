/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/create",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
