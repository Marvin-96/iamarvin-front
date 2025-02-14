// const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iamarvin.com',
        port: '',
        pathname: '/**',
      }
    ]
  },
  i18n: {
    locales: ['en', 'fr'], 
    defaultLocale: 'fr',   
  }
}

module.exports = nextConfig;
