import Vue from 'vue' // 项目启动入口
// 加载element组件库
import ElementUI from 'element-ui'
// 加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

// 全局注册element组件库
Vue.use(ElementUI)

Vue.config.productionTip = false
// 创建vue根实例
// 把router配置到实例中
// 通过render方法把APP根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
  // el:'app'相当于$mount('#app')
}).$mount('#app')
