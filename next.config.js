/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.ibb.co",
      "ibb.co",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "shareicon.net",
    ],
  },
};

module.exports = nextConfig;
