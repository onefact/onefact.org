const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc'],
//   i18n: {
//     locales: ['en'],
//     defaultLocale: 'en'
//   },
  redirects() {
    return [
      {
        source: '/help',
        destination: 'https://help.onefact.org',
        permanent: true
      }
    ];
  },
  rewrites() {
    return [
      {
        source: '/spec',
        destination: '/spec.html'
      }
    ];
  }
});
