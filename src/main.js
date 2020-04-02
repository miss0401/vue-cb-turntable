import Vue from 'vue'
import App from './App.vue'
// import 'lib-flexible'
import Turntable from './packages/index'

Vue.use(Turntable);

new Vue({
  el: '#app',
  render: h => h(App)
})
