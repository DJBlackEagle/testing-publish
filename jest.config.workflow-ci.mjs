import baseConfig from './jest.config.mjs';

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,
  collectCoverage: true,
  coverageReporters: ['text-summary'],
};

export default config;
