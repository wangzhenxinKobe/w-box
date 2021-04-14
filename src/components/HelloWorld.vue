<!--
 * @Author: michael
 * @Date: 2021-04-14 14:52:24
 * @LastEditors: michael
 * @LastEditTime: 2021-04-14 16:27:56
 * @FilePath: /Win-Box/src/components/HelloWorld.vue
 * @Description: test
-->

<template>
  <h1>{{ msg }}</h1>


  <p>
    <el-button type="primary">主要按钮</el-button>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>