/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        'leaflet': require.resolve('leaflet'),
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
  