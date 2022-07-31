`Note: the main focus is configuring a webpack.congif.js for multiple page website`

The website is an example of a multiple page website that is used to sell such products as cakes and so on.

The entry of the webpack config should be an object instead of the string in order to configure the entry for each entry point (in this case index.html and product.html). Also the script tag should be configured for each entry that points to the particular bundle.

1. run `npm run build` to compile the code with webpack
2. Open index.html to see the page
