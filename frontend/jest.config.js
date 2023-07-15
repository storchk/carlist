module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js, jsx, ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/graphql': '<rootDir>/src/graphql/index.ts',
    '^@/components': '<rootDir>/src/components/index.ts',
    '^@/context': '<rootDir>/src/context/index.ts',
    '^@/theme': '<rootDir>/src/theme/index.ts',
    '^@/styles': '<rootDir>/src/styles/index.ts',
    '^@/mocks': '<rootDir>/src/mocks/index.ts',
  },
}
