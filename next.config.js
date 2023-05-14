// const withPWAInit = require("next-pwa");

// const isDev = process.env.NODE_ENV !== "production";

// const withPWA = withPWAInit({
//   dest: "public",
//   disable: isDev,

//   exclude: [
//     // add buildExcludes here
//     ({ asset, compilation }) => {
//       if (
//         asset.name.startsWith("server/") ||
//         asset.name.match(
//           /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
//         )
//       ) {
//         return true;
//       }
//       if (isDev && !asset.name.startsWith("static/runtime/")) {
//         return true;
//       }
//       return false;
//     },
//   ],
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// module.exports = withPWA(nextConfig);
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
});
