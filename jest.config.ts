module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        /* ts-jest config goes here */
      },
    ],
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx", // Override the "jsx" option here for Jest tests
      },
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  moduleNameMapper: {
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // Map other asset types if needed
  },
  transformIgnorePatterns: ["/node_modules/"],
};
