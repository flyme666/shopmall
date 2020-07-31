import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import lazyload from 'vue-lazyload'
import fastclick from 'fastclick'

import {Toast} from "vant";
Vue.use(Toast)
Vue.config.productionTip = false
Vue.use(lazyload,{
  loading: require('./assets/img/common/placeholder.png')
})
Vue.prototype.$bus = new Vue()
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

