/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@pax/style-guide/eslint/next')],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
};
