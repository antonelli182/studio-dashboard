/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'machina.gg',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig