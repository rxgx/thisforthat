module.exports = {
  bail: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/fileTransform.js",
    "\\.(css|less)$": "<rootDir>/test/styleTransform.js"
  },
  // setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: [
    "<rootDir>/src/**/*.(test|spec).(js|jsx)"
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/'
  ],
}
