import Vue from 'vue';
import Router from 'vue-router';
import ModalStart from '../views/ModalStart.vue';
import ModalInfo from '../views/ModalInfo.vue';
import ModalSubmit from '../views/ModalSubmit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*', // using ModalStart as catchall/fallback as using rel. path of web resource iframe would not match route
      name: 'ModalStart',
      component: ModalStart,
    },
    {
      path: '/info',
      name: 'ModalInfo',
      component: ModalInfo,
    },
    {
      path: '/submit',
      name: 'ModalSubmit',
      component: ModalSubmit,
    },
  ],
});
