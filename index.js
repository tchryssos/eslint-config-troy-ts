const localExtends = ['./rules/typescript'].map(require.resolve);

module.exports = {
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    ...localExtends,
  ],

  rules: {
    // eslint
    'max-len': 'off',
    'one-var': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-prototype-builtins': 'off',
    'class-methods-use-this': 'warn',
    'padded-blocks': 'off',
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'prefer-arrow-callback': 'warn',
    semi: 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'no-shadow': 'off',

    // import
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-anonymous-default-export': 'error',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/no-default-export': 'warn',

    // jsx-a11y
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // react
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-bind': 'warn',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-newline': 'off',
    'react/button-has-type': 'error',
    'react/jsx-key': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
      },
    ],
    'react/no-deprecated': 'error',
    'react/no-typos': 'error',
    'react/self-closing-comp': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/jsx-one-expression-per-line': 'off',

    // Typescript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
};