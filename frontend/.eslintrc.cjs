module.exports = {
  env: { browser: true, es2020: true, 'jest/globals': true },
  globals: {
    JSX: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:styled-components-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jest/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'jsx-a11y',
    'styled-components-a11y',
    'unicorn',
    'prettier',
    'jest',
    'react',
    'react-hooks',
    'testing-library',
    'jest',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'object-shorthand': ['error', 'always'],
    'no-unneeded-ternary': 'error',
    'import/no-duplicates': 'error',
    'import/export': 'error',
    'react/self-closing-comp': 'error',
    'no-lone-blocks': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'prefer-promise-reject-errors': 'warn',
    'no-undef-init': 'error',
    'no-template-curly-in-string': 'off',
    'import/first': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-redeclare': 'error',
    'no-case-declarations': 'error',
    'no-empty': 'error',
    'no-console': 'error',
    'no-duplicate-case': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-inner-declarations': 'error',
    camelcase: 'error',
    'no-undef': 'error',
    'no-dupe-keys': 'error',
    'sort-imports': 'off', // must be disabled for simple-import-sort to work
    'import/order': 'off', // must be disabled for simple-import-sort to work
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jest/require-hook': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
}
