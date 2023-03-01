/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  basePath: '/vivienda',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    KEYENCRYPTADIGITAL: process.env.KEYENCRYPTADIGITAL,
    KEYSESSIONSTORAGE: process.env.KEYSESSIONSTORAGE,
    TAGMANAGER:process.env.TAGMANAGER,
    APIURLMORTGAGE:process.env.APIURLMORTGAGE,
  },
  images: {
    loader: 'akamai',
    path: '/',
  }
}

module.exports = nextConfig