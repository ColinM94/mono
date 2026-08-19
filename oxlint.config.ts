import { defineConfig } from 'oxlint';

export default defineConfig({
  rules: {
    'react/only-export-components': 'warn',
    'react/exhaustive-deps': 'off',
    'typescript/no-unsafe-member-access': 'off',
    'typescript/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/extensions': [
      'error',
      {
        ts: 'always',
        tsx: 'always',
        checkTypeImports: false,
      },
    ],
  },
  categories: {
    correctness: 'warn',
  },
  plugins: ['typescript', 'node', 'react', 'react-perf', 'import', 'promise'],
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
