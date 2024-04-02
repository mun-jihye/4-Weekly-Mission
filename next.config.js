/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  styledComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jasonwatmore.com',
      },
      {
        protocol: 'https',
        hostname: 'codeit-frontend.codeit.com',
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org',
      },
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'tanstack.com',
      },
      {
        protocol: 'https',
        hostname: 'storybook.js.org',
      },
      {
        protocol: 'https',
        hostname: 'testing-library.com',
      },
      {
        protocol: 'https',
        hostname: 'static.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 's.pstatic.net',
      },
    ],
  },
};

module.exports = nextConfig;
