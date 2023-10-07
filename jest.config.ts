import nextJest  from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/src/images",
    "<rootDir>/src/mock",
    "<rootDir>/src/api"
  ],
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(customJestConfig)


