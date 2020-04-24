import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementul from 'element-ui' // 引入ui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styless/index.less' // 引入初始化样式
Vue.config.productionTip = false
Vue.use(Elementul)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
