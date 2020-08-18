module.exports = {
  root: true,
  // parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'standard', 'prettier'],
  rules: {
    'space-before-function-paren': 0,
    'no-undef': 0
  }
}
