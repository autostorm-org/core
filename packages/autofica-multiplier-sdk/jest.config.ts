export default {
  coveragePathIgnorePatterns: ["/node_modules/", "/build"],
  testTimeout: 90000,
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      // ts-jest configuration goes here and your IDE will suggest which configs when typing
      tsconfig: "./tsconfig.json",
    },
  },
  testURL: "https://bsc-dataseed.binance.org",
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
