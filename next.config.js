/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  swSrc: "service-worker.js",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  ...nextConfig,
});
