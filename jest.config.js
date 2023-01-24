const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src/',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['jest-canvas-mock'],
  collectCoverageFrom: ['<rootDir>/src/components/**',
    '<rootDir>/src/pages/**',
    '<rootDir>/src/hooks/**',
    '<rootDir>/{!(),}.config.js',
    '!<rootDir>/src/components/svg/**',
    '!<rootDir>/src/pages/_**.tsx',
    '!<rootDir>/src/services/index.ts',
    '!<rootDir>/src/libraries/**',
    '!<rootDir>/src/config/**'],
  modulePathIgnorePatterns: ["<rootDir>/src/pages/validacion-biometrica","<rootDir>/src/utils/RouterUtmsUrl","<rootDir>/src/pages/validacion","<rootDir>/src/components/ui/Pdf"],
};
module.exports = createJestConfig(customJestConfig);
