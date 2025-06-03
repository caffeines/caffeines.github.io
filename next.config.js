module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://caffeines.github.io',
  },
  async rewrites() {
    return [
      {
        source: '/blogs/:path*',
        destination: '/blogs/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/page/:path*',
        destination: '/blogs/page/:path*',
        permanent: true,
      },
    ];
  },
}