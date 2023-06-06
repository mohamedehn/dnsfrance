// next.config.js

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/jobDescription/:id',
        destination: '/jobDescription',
      },
      // {
      //   images: {
      //     path : "/"
      //   }
      // }
    ];
  },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   //   images: {
//   //     path: "/",
//   // },
//     source: '/jobDescription/:id',
//     destination: '/jobDescription',
// }


// module.exports = nextConfig;
