// This files is not transpiled, so must use commonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha does not understand 
require.extensions['.css'] = function() {};