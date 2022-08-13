module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'react-app',
    'react-app/jest',
  ], // 定义文件继承的子规范
  plugins: ['react-hooks', 'eslint-plugin-react', 'react', 'prettier', 'html'], // 定义了该eslint文件所依赖的插件
  env: {
    // 指定代码的运行环境
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    // 自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 自定义的一些规则: 0 关闭 1 警告 2 错误
    'prettier/prettier': 1,
    'linebreak-style': [2, 'unix'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 0,
    'valid-typeof': [
      1,
      {
        requireStringLiterals: false,
      },
    ],
    sime: 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
}
