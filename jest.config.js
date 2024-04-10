/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  preset: 'ts-jest',
  transform: {
		'\\.ts$': 'ts-jest',
	},
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['dotenv/config'],
  roots: ['<rootDir>/src'],
};

module.exports = config;
