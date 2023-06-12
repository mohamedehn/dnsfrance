// next.config.js

module.exports = {
  reactStrictMode: true,
  basePath: '/dnsfrance',
  async rewrites() {
    return [
      {
        source: '/jobDescription/:id',
        destination: '/jobDescription',
      },
      {
        source: '/images/:path*', // Source correcte pour les réécritures des images
        destination: '/:path*',
      },
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
