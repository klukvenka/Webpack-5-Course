`Note: the main focus is configuring a webpack server`

The website is an example of a multiple page website that is used to sell such products as cakes and so on.

To install the plugin `npm i -D webpack-dev-server` has been used.
With the developer server the changes applied to the code are automatically processed to the server (in this example will be localhost:8080), so there is no need to build the changes every time.

1. run `npm run build` to compile the code with webpack or `npm run dev` to run the dev server
2. Open **dist/index.html** to see the page

The definition of the dev (--open opening the browser automatically):
`"dev": "webpack serve --mode development --open"`
