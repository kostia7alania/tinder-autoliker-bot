const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    // https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error
    // parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // @doc https://www.npmjs.com/package/eslint-import-resolver-alias
      alias: {
        modules: ['node_modules'],
        // The default value of extensions property is ['.js', '.json', '.node'] if it is assigned to an empty array or not specified
        extensions: [0],
        // extensions: ['.js', '.vue'],
        // https://stackoverflow.com/questions/58671448/how-to-force-vue-extension-in-all-imports-using-eslint
        map: [
          ['@', './src'], // @REF after removing mis
          ['~', './'], // @REF after removing mis
          // your aliases go here.
        ],
      },
    },
  },
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  // https://eslint.org/docs/user-guide/configuring#specifying-globals
  globals: {
    process: true,
  },

  // add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // "clean-regex/rule-name": 1,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'el',
          'obj',
        ],
      },
    ],

    // for vuex modules
    'no-shadow': [
      'error',
      {
        allow: ['state', 'getters'],
      },
    ],
    'import/extensions': [
      1,
      'always',
      {
        js: 'never',
        vue: 'never',
        json: 'never',
      },
    ],
    'no-plusplus': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-mixed-operators': 'off',
    // allow debugger during development
    'no-debugger': isProduction ? 'error' : 'off',
    'no-console': isProduction ? 2 : 0,
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [],
      },
    ],
    'array-callback-return': 'off',
    'handle-callback-err': 'off',
    'no-return-assign': 'off',
    'vue/no-v-html': 'off',
    'vue/return-in-computed-property': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-parsing-error': 'off',
    radix: 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-multi-assign': 'off',
    'no-bitwise': 'off',
    'no-restricted-globals': 'off',
    'no-lonely-if': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'global-require': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'no-restricted-properties': 'off',
    'no-continue': 'off',
    /* 'no-unused-expressions': [2, { allowTernary: true }],
  'no-unused-vars': 0,
  'vue/require-valid-default-prop': 0,
  eqeqeq: 0,
  'import/extensions': 0,
  camelcase: 0,
  'vue/require-prop-types': 0,
  'vue/order-in-components': 0,
  'vue/require-prop-type-constructor': 0,
  'no-bitwise': 0,
  */
    'default-case': 0,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 'max-len': [
        //   'error',
        //   120,
        //   2,
        //   {
        //     ignoreUrls: true,
        //     ignoreComments: false,
        //     ignoreRegExpLiterals: true,
        //     ignoreStrings: true,
        //     ignoreTemplateLiterals: true,
        //   },
        // ],
      },
    },
  ],
}
