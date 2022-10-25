module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": 0,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
  },
};
