import Vue from 'vue';
import Router from 'vue-router';
import ModalStart from '../components/ModalStart.vue';
import ModalInfo from '../components/ModalInfo.vue';
import ModalSubmit from '../components/ModalSubmit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ModalStart',
      component: ModalStart,
    },
    {
      path: '/info/',
      name: 'ModalInfo',
      component: ModalInfo,
    },
    {
      path: '/submit/',
      name: 'ModalSubmit',
      component: ModalSubmit,
    },
  ],
});
