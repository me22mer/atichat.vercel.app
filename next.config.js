/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};