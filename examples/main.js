import Vue from 'vue'
import App from './App.vue'
import UniUI from '../packages'

Vue.config.productionTip = false

Vue.use(UniUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
