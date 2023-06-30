module.exports = {
  notify: false,
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**/*.{ts,tsx}',
    '!src/components/index.ts',
  ],
  coverageReporters: ['lcov', 'text'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|svg)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
