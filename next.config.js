/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {nextConfig}

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}
