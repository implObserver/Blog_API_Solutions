import { ESLint } from 'eslint';
import prettier from 'eslint-plugin-prettier';

export const { Linter } = ESLint;

export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        browser: true,
        node: true,
        console: 'readonly',
        process: 'readonly',
      },
    },
    files: ['**/*.js'], // Укажите, какие файлы применяются
    rules: {
      'no-undef': 'error', // Подчеркивать несуществующие переменные
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ], // Подчеркивает неиспользуемые переменные
      semi: ['error', 'always'], // Требует использование ; в конце строк
      quotes: ['error', 'single'], // Требует использование одинарных кавычек
      eqeqeq: ['error', 'always'], // Требует использования === вместо ==
      'no-console': 'warn', // Предупреждает о использовании console
      'prettier/prettier': 'error', // Настройка Prettier как правило ESLint
    },
    plugins: {
      prettier: prettier, // Указываем плагин как объект
    },
  },
];
