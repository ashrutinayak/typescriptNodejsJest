module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['.*\\.d\\.ts'],
    testMatch: ['<rootDir>/test/**/*.ts'],
    // reporters: ['default', 'jest-junit'],
    preset: 'ts-jest',
    clearMocks: true,
  };