/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    KYCAPIURL: process.env.KYCAPIURL,
    MAINTENANCE: process.env.MAINTENANCE,
    KEYKYCHASH: process.env.KEYKYCHASH,
  },
}

module.exports = nextConfig
