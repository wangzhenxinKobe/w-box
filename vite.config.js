/*
 * @Author: michael
 * @Date: 2021-04-14 14:52:24
 * @LastEditors: michael
 * @LastEditTime: 2021-04-14 17:02:39
 * @FilePath: /Win-Box/vite.config.js
 * @Description: 配置文件
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
})
