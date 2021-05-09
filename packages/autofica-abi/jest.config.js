module.exports = {
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./MCL-SmartContracts",
    "src/gen-types",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "./MCL-SmartContracts",
    "src/gen-types",
  ],
  testTimeout: 90000,
  collectCoverage: true,
};
