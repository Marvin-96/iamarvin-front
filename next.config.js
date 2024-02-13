/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { 
    remotePatterns: [
    // {
    //   protocol: 'http',
    //   hostname: 'localhost',
    //   port: '8888',
    //   pathname: '/**',
    // },
    {
      protocol: 'https',
      hostname: 'iamarvin.com',
      port: '',
      pathname: '/**',
    }
    
  ]
  }
 

}

module.exports = nextConfig;
