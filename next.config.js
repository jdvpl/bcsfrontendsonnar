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
    TAGMANAGER: process.env.TAGMANAGER,
    APIURLMORTGAGE: process.env.APIURLMORTGAGE,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack: (config) => {
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
}

module.exports = nextConfig