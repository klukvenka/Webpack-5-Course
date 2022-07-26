`Note: Implementation here is not important. The main focus is modules`

## JS Modules
There are several modules in JS. The ones that will be covered are CommonJS and ES6.

### CommonJS --> require
Run `node main.js` to run the code with CommonJS format (currently is commented in files)

### ES6 --> import/export
NodeJS doesn’t understand import/export keywords. So here webpack.config.js is needed. 

1. Run `npx webpack --config webpack.config.js --mode development` to compile the ES6 code into the format that is NodeJS can understand
(the file compiled is "bundle.js")
2. Run `node dist/bundle.js` to run the code
