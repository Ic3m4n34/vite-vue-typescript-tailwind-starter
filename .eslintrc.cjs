module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.app.json'], // Path to the TypeScript configuration
  },
  rules: {
    'max-len': 0,
    'no-console': 0,
    'vue/no-v-html': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/multi-word-component-names': 0,
    'no-tabs': ['error', { allowIndentationTabs: true }],
    '@typescript-eslint/no-explicit-any': 0,
  },
};
