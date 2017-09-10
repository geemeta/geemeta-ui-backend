// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import GM from './geemeta.js'

Vue.config.productionTip = false

Vue.prototype.$GM = GM
GM.init({
  router: router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

// Vue.config.errorHandler = function (err, vm) {
//   // handle error
// }

$.fn.extend({findIncludeSelf: function (selector) { return this.find(selector).addBack(selector) }})
