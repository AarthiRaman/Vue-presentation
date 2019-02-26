import Vue from 'vue';
import Router from 'vue-router';
import Demo from '@/components/Demo';
import Presenter from '@/components/Presenter/Presenter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/slide',
      name: 'Presenter',
      component: Presenter,
    },
  ],
});
