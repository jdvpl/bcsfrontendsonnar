const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src/',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['<rootDir>/src/components/**',
    '<rootDir>/src/pages/**',
    '<rootDir>/src/hooks/**',
    '<rootDir>/src/services/**',
    '<rootDir>/src/utils/**',
    '<rootDir>/{!(),}.config.js',
    '!<rootDir>/src/hooks/**.ts',
    '!<rootDir>/src/components/**/**.ts',
    '!<rootDir>/src/components/svg/**',
    '!<rootDir>/src/pages/_**.tsx',
    '!<rootDir>/src/pages/index.tsx',
    '!<rootDir>/src/services/index.ts',
    '!<rootDir>/src/utils/index.ts',
    '!<rootDir>/src/libraries/**',
    '!<rootDir>/src/config/**'],
};
module.exports = createJestConfig(customJestConfig);
