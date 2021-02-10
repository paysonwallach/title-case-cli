module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/standard",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
};
