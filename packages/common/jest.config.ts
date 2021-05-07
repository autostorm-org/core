export default {
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/src/__mocks__/svgMock.ts",
    "\\.png": "<rootDir>/src/__mocks__/pngMock.ts",
  },
};
