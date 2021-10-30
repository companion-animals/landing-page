module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "src/styles/global.css": "<rootDir>/__mocks__/styleMock",
    "../src/styles/globals.css": "<rootDir>/__mocks__/styleMock",
    "src/(.*)": "<rootDir>/src/$1",
    "__generated__/(.*)": "<rootDir>/__generated__/$1",
    "pages/(.*)": "<rootDir>/pages/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.stories\\.[tj]sx?$": "@storybook/addon-storyshots/injectFileName",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
};
