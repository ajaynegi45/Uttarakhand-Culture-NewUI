/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export"
  reactStrictMode: true,

  // images:{
  //     // You can use any one
  //     domain:process.env.NEXT_PUBLIC_DOMAIN, // Here you can give specific image
  //
  //     // Here you can give allow all image with that url
  //     remotePatterns: [{
  //         protocol: "https",
  //         hostname: "website url",
  //     }, {
  //         protocol: "https",
  //       hostname: "*.google.com",
  //     }]
  // }

  // webpack: (config, { isServer }) => {
  //     // Handle TypeScript files
  //     config.module.rules.push({
  //         test: /\.tsx?$/,
  //         use: 'ts-loader',
  //         exclude: /node_modules/,
  //     });
  //
  //     return config;
  // }
};

export default nextConfig;
