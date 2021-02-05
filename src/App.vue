<template>
  <div id="app">
    <!-- <h1>黑马头条</h1> -->
    <!-- 路由出口 -->
    <router-view/>
    <!-- <el-button>默认按钮</el-button>
    <el-input-number
    v-model="num"
    :min="1"
    :max="10" label="描述文字"></el-input-number> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      num: 6
    }
  },
  methods: {},
  created () {}
}
</script>
