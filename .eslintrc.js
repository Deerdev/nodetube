module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "node": true,
      "mocha": true,
      "jquery": true
  },
  "extends": "eslint:recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2018
  },
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
           (process.platform === "win32" ? "windows" : "unix")
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-multiple-empty-lines": [
          "error", 
          { "max": 1, "maxEOF": 1}
      ],
    //   "keyword-spacing": ["error", { "before": false, "after": false }],
      "keyword-spacing": ["error", { "before": false, "after": false , "overrides": {
        "else": { "before": true, "after": true },
        "catch": { "before": true, "after": true }
      } }],
      "space-before-function-paren": 2,
      "space-before-blocks": ["error", "never"],
      "no-useless-escape": 0,
      "no-console": 0,
      "no-unused-vars": 0,
      "no-undef": 0,
      "no-redeclare": 0,
      "no-unreachable": 0
  }
};