/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://onefact.org',
  generateRobotsTxt: true,
  async additionalPaths(config) {
    return [await config.transform(config, '/spec')];
  }
};
