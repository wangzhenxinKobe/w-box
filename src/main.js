/*
 * @Author: michael
 * @Date: 2021-04-14 14:52:24
 * @LastEditors: michael
 * @LastEditTime: 2021-04-14 17:14:19
 * @FilePath: /Win-Box/src/main.js
 * @Description: 项目入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'

import element from '@/common/element/components'
const app = createApp(App)
element(app)
app.mount('#app')
