import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { request } from "./network/request";
request({
    url:'/home/multidata',
    method:'get'
}).then(res=>{
  console.log(res)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
