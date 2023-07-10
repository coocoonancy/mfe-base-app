module.exports =  {
    parser:  '@typescript-eslint/parser',  // 声明eslint解析器
    extends:  [
      'plugin:@typescript-eslint/recommended',  // 使用来自 @typescript-eslint/eslint-plugin推荐的规则
      'prettier/@typescript-eslint',  // 使用eslint-config-prettier禁用@typescript-eslint/eslint-plugin与prettier冲突的ESLINT规则
      'plugin:prettier/recommended',  // 确保作为最后的配置，开启eslint-plugin-prettier，同时将prettier错误 作为ESLint错误.
    ],
    parserOptions:  {
      ecmaVersion:  'ESNEXT',  // 允许解析现代ES语法
      sourceType:  'module',  // 允许使用imports
      ecmaFeatures: {
        jsx: true
      }
    },
  };