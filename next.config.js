/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  basePath: '/vivienda',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    KYCAPIURL: process.env.KYCAPIURL,
    MAINTENANCE: process.env.MAINTENANCE,
    KEYKYCHASH: process.env.KEYKYCHASH,
    KEYSESSIONSTORAGE: process.env.KEYSESSIONSTORAGE,
    KEYSARLAFT:process.env.KEYSARLAFT,
    TAGMANAGER:process.env.TAGMANAGER,
    APIURLMORTGAGE:process.env.APIURLMORTGAGE,
    COMMONSAPIURL:process.env.COMMONSAPIURL
  },
  images: {
    loader: 'akamai',
    path: '/',
  }
}

module.exports = nextConfig