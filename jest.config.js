const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src/',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['jest-canvas-mock'],
  collectCoverageFrom: ['<rootDir>/src/components/**',
    '<rootDir>/{!(),}.config.js',
    '!<rootDir>/src/pages/_**.tsx',
    '!<rootDir>/src/libraries/**',
    '!<rootDir>/src/config/**'],
  modulePathIgnorePatterns: ["<rootDir>/src/pages/validacion-biometrica","<rootDir>/src/pages/simulador","<rootDir>/src/pages/validacion","<rootDir>/src/components/ui/Pdf","<rootDir>/src/components/ui/simulation"],
};
module.exports = createJestConfig(customJestConfig);
