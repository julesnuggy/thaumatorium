module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'modules-newline'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'modules-newline/import-declaration-newline': 'warn',
    'modules-newline/export-declaration-newline': 'warn',
    // Best Practices
    'eqeqeq': 2,
    'curly': 2,
    'no-multi-spaces': 2,
    'no-useless-return': 2,
    // Stylistic Rules
    'array-bracket-newline': [2, { 'multiline': true, 'minItems': 3 }],
    'array-element-newline': [2, { 'multiline': true, 'minItems': 3 }],
    'array-bracket-spacing': [2, 'always', { 'singleValue': false }],
    'brace-style': [2, '1tbs'],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'indent': ['error', 2],
    'max-len': [2, { 'code': 120, 'tabWidth': 2 }],
    'object-curly-newline': [2, {
      'ObjectExpression': { 'multiline': true, 'minProperties': 3, 'consistent': false },
      'ObjectPattern': { 'multiline': true, 'minProperties': 3, 'consistent': false },
      'ImportDeclaration': { 'multiline': true, 'minProperties': 3, 'consistent': false },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3, 'consistent': false },
    }],
    'object-curly-spacing': [2, 'always', { 'arraysInObjects': true, 'objectsInObjects': true }],
    'object-property-newline': [2, { 'allowAllPropertiesOnSameLine': false }],
    'quotes': [1, 'single'],
    // React Plugin Rules
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-tag-spacing': [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-pascal-case': 2
  }
};
