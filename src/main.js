import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import './thirdPartyStyles';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.config.devtools = true

new Vue({ 
  router,
  render: h => h(App),
}).$mount('#app')
