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
      {
        source: '/notion-todo',
        destination: '/notion-todo',
      },
    ];
  },
}