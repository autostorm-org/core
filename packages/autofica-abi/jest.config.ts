export default {
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./MCL-SmartContracts",
    "src/gen-types",
    "build",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "./MCL-SmartContracts",
    "src/gen-types",
    "build",
  ],
  testTimeout: 90000,
  collectCoverage: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      // ts-jest configuration goes here and your IDE will suggest which configs when typing
      tsconfig: "./tsconfig.json",
    },
  },
};
