import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
// eslint-disable-next-line no-unused-vars
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.config.productionTip = false

const state = {
  user: {}
}

new Vue({
  data: this.state,
  router: createRouter(state),
  render: h => h(App)
}).$mount('#app')
