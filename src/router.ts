import Vue from 'vue';
import ViewRouter from 'vue-router';
import Home from './views/Home.vue';

Vue.use(ViewRouter);

// https://codesandbox.io/s/9w3n502jo

export default new ViewRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import (/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import (/* webpackChunkName: "test" */ './views/Test.vue'),
    },
  ],
});
