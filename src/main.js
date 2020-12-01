import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let html = document.documentElement;
html.style.fontSize = '20.7px'
// html.getBoundingClientRect().width / 20 + 'px'
