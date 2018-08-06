module.exports = {
  testURL: 'http://localhost/',
  testRegex: '.*test.js$',
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: ['src/**/*.js', '!src/**/*/__stories__/**/*.js'],
};
