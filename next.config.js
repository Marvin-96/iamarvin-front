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
    defaultLocale: 'fr',  // Remettre fr comme langue par défaut
  }
}

module.exports = nextConfig;
