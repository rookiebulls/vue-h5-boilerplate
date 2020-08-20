import Vue from 'vue'
import router from './router'
import App from './App'
import './plugin'
import 'normalize.css'
import 'assets/styles/base.scss'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
