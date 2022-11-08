/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  env: {
    KYC_API_URL: process.env.KYC_API_URL,
    MAINTENANCE: process.env.MAINTENANCE,
    KEY_KYC_HASH: process.env.KEY_KYC_HASH,
  },
}

module.exports = nextConfig
