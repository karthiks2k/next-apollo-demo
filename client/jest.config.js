module.exports = {
    setupFilesAfterEnv: ["./jest.setup.ts"],
    moduleNameMapper: {
      "^@components(.*)$": "./components$1",
      "^@pages(.*)$": "./pages$1",
    },
    testPathIgnorePatterns: ['./.next/', './node_modules/'],
  };