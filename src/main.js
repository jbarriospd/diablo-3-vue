// Paquetes de npm
import Vue from 'vue'

import './plugins/bootstrapVue'
import './plugins/fontAwesome'

// Custom directives
import './directives'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl'

// Configuración extra
Vue.config.productionTip = false

// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
