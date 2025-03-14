/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/api/:path*`,
      },
    ]
  },
  images: {
    domains: ['drupalx-graphql.ddev.site'],
  }
}

module.exports = nextConfig
