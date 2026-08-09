import { defineConfig } from 'oxlint';

export default defineConfig({
  rules: {
    'react/only-export-components': 'warn',
    'react/exhaustive-deps': 'off',
  },
  categories: {
    correctness: 'warn',
  },
  plugins: ['node', 'react', 'react-perf', 'import', 'promise'],
  jsPlugins: [],
  overrides: [],
  extends: [],
  ignorePatterns: [
    '**/dist/**',
    '**/build/**',
    '**/*.mjs',
    '**/*.js',
    '**/*.cjs',
    '**/node_modules/**',
  ],
  env: {},
  globals: {},
  settings: {},
  options: {},
});
