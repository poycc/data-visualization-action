module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx', '.ts'] }],
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'import/extensions': 0,
    'prettier/prettier': 'error',
    'import/no-unresolved': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
  },
};
