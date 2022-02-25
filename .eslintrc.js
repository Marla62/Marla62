module.exports = {
    root: true, // 检测到最近一级.eslintrc*
    env: {
      es6: true, // 支持并启用es6语法
      node: true, // 支持node语法及变量
      browser: true, // 支持浏览器全局变量
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'], // 第三方插件
    plugins: ['vue'],
    parserOptions: {
      parser: 'babel-eslint', // 解析器，默认使用Espree
      ecmaVersion: 2018,
      sourceType: 'module', // 指定文件来源类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    // 全局变量不做校验
    globals: {
      moment: 'writable',
      Vue: 'writable',
      VueRouter: 'writable',
      VueI18n: 'writable',
      ELEMENT: 'writable',
      TWEEN: 'writable',
      _: 'writable',
    },
    rules: {
      indent: ['error', 2, {SwitchCase: 1}],
      'no-debugger': 0,
      'no-console': 1,
      'no-unused-vars': 1,
      eqeqeq: 2,
      quotes: ['error', 'single', {'allowTemplateLiterals': true}],
      'no-irregular-whitespace': 2, // 禁止不规则的空格
      'no-multi-spaces': 'error', // 禁止多个空格
      'space-infix-ops': 2, // 运算符前后禁止多个空格
      'array-bracket-spacing': ['error', 'never'], // 数组统一空格
      'block-spacing': ['error', 'always'],
      'comma-spacing': ['error'],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}], // 冒号空格
      'keyword-spacing': ['error', {'before': true}], //if () {}空格else
      'no-whitespace-before-property': 'error',
      'semi-spacing': 'error', //分号空格
      'space-before-blocks': ['error', 'never'], //function name()空格{}
      'space-before-function-paren': ['error', 'never'], //function name空格(){}
      'space-in-parens': ['error', 'never'],
      'arrow-spacing': ['error', {'before': false, 'after': false}], //()空格=>空格{}
      'rest-spread-spacing': ['error', 'never'], // 空格...空格{}
      'no-unreachable': 1,
      'no-trailing-spaces': 2,
      'object-curly-spacing': ['error', 'never'],
      // 'vetur.validation.template': false,
      // 'vue/valid-template-root': 'off',
      'vue/no-v-html': 0,
      'vue/component-tags-order': ['error', {'order': ['style', 'template', 'script']}],
      'vue/html-quotes': ['error', 'double'],
      'vue/require-v-for-key': 1, // v-for要有key
      'vue/html-self-closing': 'off', // 标签闭合
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'never'
      }],
      'vue/html-closing-bracket-spacing': 'error', // 标签后是否允许空格
      'vue/html-end-tags': 'error', // 标签自我关闭
      'vue/mustache-interpolation-spacing': 'error', // 标签插值中前后固定一个空格
      'vue/no-reserved-component-names': 'error', // 禁止保留名称
      'vue/no-unsupported-features': 1, // 未支持的语法
      'vue/no-unused-components': 1, // 未注册的组件
      'vue/padding-line-between-blocks': 1, //
      'vue/no-use-v-if-with-v-for': 1,
      // "vue/static-class-names-order": 1, // name属性
      'vue/max-attributes-per-line': ['error', { // 单行和多行属性数量
        'singleline': 10,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }],
    },
  };
  