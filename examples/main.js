import Vue from 'vue';
import App from './App.vue';
import router from './router';
import GW from '../packages/index';

Vue.use(GW);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
