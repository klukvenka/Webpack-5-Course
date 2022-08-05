`Note: the main focus is to setup a webpack for the real project`

The website is an example of an educational website similar to udemy.

**Project dependencies** that were installed:
`npm i --save lodash jquery typed.js validate.js toastr bootstrap`

**Webpack dependencies** that were installed:
`npm i -D webpack webpack-cli css-loader style-loader sass-loader sass html-webpack-plugin webpack-dev-server`

1. run `npm run build` to compile the code with webpack or `npm run dev` to run the dev server
2. Open **dist/index.html** to see the page

The definition of the dev (--open opening the browser automatically):
`"dev": "webpack serve --mode development --open"`