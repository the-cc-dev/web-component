'use strict';

module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: __dirname,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    preprocessors: {
    },
    files: [
      'node_modules/forms-js/dist/forms-js.js',
      'dist/*.js',
      'test/**/*.js'
    ],
    exclude: [],
    port: 8989,
    browsers: [
      process.env.TRAVIS ? 'Firefox' : 'Chrome'
    ],
    plugins: [
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-chai'
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO
  });
};