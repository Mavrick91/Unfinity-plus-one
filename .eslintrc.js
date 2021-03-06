module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'react/no-array-index-key': 'off',
  },
};
