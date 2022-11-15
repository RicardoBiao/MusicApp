/*
 * @Author: liweibiao
 * @Date: 2022-11-15 12:02:49
 * @LastEditTime: 2022-11-15 12:03:20
 * @LastEditors: liweibiao
 * @Description: 
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-console': 'warn',
    },
}
