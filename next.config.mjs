/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uttarakhandhaat.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/id/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dsource.in',
        pathname: '/sites/default/files/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/image-photo/**',
      },
      {
        protocol: 'https',
        hostname: 'c1.wallpaperflare.com',
        pathname: '/preview/992/229/146/**',
      },
    ],
  },
};

export default nextConfig;
