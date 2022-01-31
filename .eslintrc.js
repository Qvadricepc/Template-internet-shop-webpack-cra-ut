module.exports = {
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    // browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
  ],
  // https://eslint.org/docs/user-guide/configuring
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  // [javascript - How to use ESLint with Jest - Stack Overflow](https://stackoverflow.com/questions/31629389/how-to-use-eslint-with-jest/40265356)
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.js'],
      env: {
        jest: true, // now **/*.spec files' env has both es2020 and jest
      },
    },
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off”,
    'linebreak-style': 0,
    'prefer-const': 0,
    'spaced-comment': 0,
    'no-undef': 'warn',
    'padded-blocks': 0,
    'import/imports-first': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'no-shadow': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'arrow-body-style': 0,
    'quote-props': 0,
    // https://github.com/typescript-eslint/typescript-eslint/issues/379
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
    // 'no-unused-vars': 1,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'consistent-return': 0,
    'max-len': 0,
    'no-underscore-dangle': 'off',
    'no-throw-literal': 'error',
    'no-bitwise': ['off'],
    'dot-notation': ['off'],
    'prettier/prettier': ['error'],
    camelcase: ['off'],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
      },
    },
  },
};
