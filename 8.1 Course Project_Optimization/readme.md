`Note: the main focus is to optimize a webpack for the real project`

The website is an example of an educational website similar to udemy.

The optimization (chunks) helps in cases when both bundles (in this case 2: index and courses) share many dependencies together including lodash, jquery and so on.

**Webpack dependencies** that were installed:
`npm i -D webpack-bundle-analyzer`

To build:

1. run `npm run dev` to compile the code with webpack
2. Open **dist/index.html** to see the page

To develop:
`npm run serve` to run the dev server
