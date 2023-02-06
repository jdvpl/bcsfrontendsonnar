const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src/',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['jest-canvas-mock'],
  collectCoverageFrom: [
    '<rootDir>/src/components/**',
    '<rootDir>/src/pages/**',
    '<rootDir>/src/hooks/**',
    '<rootDir>/src/utils/**',
    '<rootDir>/src/routes/**',
    '<rootDir>/src/session/**',
    '<rootDir>/{!(),}.config.js',
    '!<rootDir>/src/components/svg/**',
    '!<rootDir>/src/pages/_**.tsx',
    '!<rootDir>/src/services/**',
    '!<rootDir>/src/context/**',
    '!<rootDir>/src/config/**'],
  modulePathIgnorePatterns: ["<rootDir>/src/pages/validacion-biometrica/","<rootDir>/src/pages/simulador/resumen.tsx","<rootDir>/src/components/ui/Pdf","<rootDir>/src/components/ui/simulation","<rootDir>/src/pages/validacion/error-validacionBlock.tsx","<rootDir>/src/pages/validacion/error-validacionDiario.tsx","<rootDir>/src/pages/validacion/error.tsx","<rootDir>/src/pages/validacion/index.tsx"],
};
module.exports = createJestConfig(customJestConfig);
