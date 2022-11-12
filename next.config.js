/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: true,
  basePath: '/vivienda',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    KYCAPIURL: process.env.KYCAPIURL,
    MAINTENANCE: process.env.MAINTENANCE,
    KEYKYCHASH: process.env.KEYKYCHASH,
  },
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
