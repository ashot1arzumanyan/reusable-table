module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },

  clearMocks: true,

  coverageProvider: "v8",

  preset: "ts-jest",

  rootDir: "src",

  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
};
