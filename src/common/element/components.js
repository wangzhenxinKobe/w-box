/*
 * @Author: michael
 * @Date: 2021-04-14 16:33:33
 * @LastEditors: michael
 * @LastEditTime: 2021-04-14 17:12:17
 * @FilePath: /Win-Box/src/common/element/components.js
 * @Description: 按需引入element-plus组件
 */
// src/common/element/components.js'
import {
  ElButton,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'
const components = [ElButton]
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]
// 统一注册
export default (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
