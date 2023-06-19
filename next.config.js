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
        source: '/handbook',
        destination: 'https://help.onefact.org',
        permanent: true
      },
      {
      source: "/powertothepatients",
      destination: "https://www.amazon.com/photos/shared/3XUqnvVmR7q_gEyiN7aj1w.87DpHSxs5Zdh5B-V4t_Ou_?sort=sortOldestToNewest", 
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
