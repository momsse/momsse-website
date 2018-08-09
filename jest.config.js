module.exports = {
  testURL: 'http://localhost/',
  testRegex: '.*test.js$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: ['src/**/*.js', '!src/**/*/__stories__/**/*.js'],
}
