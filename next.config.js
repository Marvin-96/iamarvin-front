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
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: {
      // Permet de détecter la langue de l'utilisateur
      // au premier chargement.
      // IMPORTANT :  Ceci est la clé pour le premier chargement !
      lookupCookie: 'NEXT_LOCALE', // Nom du cookie pour stocker la langue
      lookupHeader: 'Accept-Language', // Pour les requêtes HTTP
      lookupPath: true, // Pour les URLs (ex: /fr/accueil)
      lookupQuerystring: 'lang', // Pour les paramètres d'URL (ex: ?lang=fr)
    },
  },
};

module.exports = nextConfig;
