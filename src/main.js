import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
/* main.js */
import axios from 'axios'
import api from '@/service/api'  // 第二步驟會用到
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$api = api // 定義api這個常數給AXIOS存取json-server或實際api環境用


new Vue({
  render: h => h(App),
}).$mount('#app')
