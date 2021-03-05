import Vue from 'vue';
import App from './App.vue';
import router from './router';
import bulma from 'bulma/css/bulma.css';

Vue.use(bulma);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
