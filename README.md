## Data Thinking Website

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=datathinking-org) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

This code uses [Markdoc](https://markdoc.dev) as a backbone to render the One Fact Foundation website, alongside the rest of our web properties.

### Are you an educator or need to run a Data Thinking workshop? Deploy to Vercel to build your own website using our code!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonefact%2Fdatathinking.org%2F&demo-title=Data%20Thinking%20Website&demo-description=Static%2C%20interactive%2C%20scalable%2C%20open%20source%20course%20content&demo-url=https%3A%2F%2Fdatathinking.org) (created using [this link](https://vercel.com/docs/deploy-button#generate-your-own))

Email us at hello@onefact.org if you have any issues using this for your course.

### Deploy using GitHub Pages

GitHub Pages does not support some features of `Next.js` as this library is maintained and aligned with Vercel whose business model depends on differentiating features from GitHub Pages. 

One example is [incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), which is critical to some of our web properties at the One Fact Foundation. 

You can use this GitHub Action to deploy the website using only GitHub technology: https://github.com/onefact/onefact.org/blob/main/.github/workflows/nextjs.yml

If you cannot afford Vercel and need any help deploying to GitHub Pages please email us at hello@onefact.org and we will do our best to help :)

## Contributing

Contributions and feedback are welcomed and encouraged. Feel free to open PRs or issues here to fix typos or suggest changes, or reach our team at [hello@onefact.org](mailto:hello@onefact.org]. 

## Installation

1. Install the dependencies by running `npm install`

2. Start the development server on [http://localhost:3000](http://localhost:3000) by running `npm run dev`

3. Try editing `pages/index.md`

## Testing

Test locally using `npm run dev`.

Use [act](https://github.com/nektos/act) to test GitHub Actions deployment locally.

## Deployment

Fork this repo, go to settings > pages > source. In the dropdown, select Github Actions.
