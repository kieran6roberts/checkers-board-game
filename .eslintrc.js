module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "testing-library"
  ],
  "rules": {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-console": [0],
    "prefer-const": [0],
  }
};
