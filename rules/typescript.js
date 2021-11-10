const tsConfig = {
  extends: ['plugin:@typescript-eslint/recommended'],
  files: ['*.tsx', '*.ts'],
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
};

module.exports = {
  overrides: [tsConfig],
};
