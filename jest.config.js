const { createJsWithBabelPreset } = require("ts-jest");

const jsWithBabelPreset = createJsWithBabelPreset({
  tsconfig: "tsconfig.json",
  babelConfig: true,
});

module.exports = {
  preset: "jest-expo",
  fakeTimers: {
    enableGlobally: true,
  },
  transform: jsWithBabelPreset.transform,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
