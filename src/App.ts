import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import WithRender from './App.html';

Vue.use(VueRouter);

@ WithRender
@ Component({
  router: new VueRouter({
    routes: [
      {
        path: '/about',
        alias: '/about/*',
        meta: { basePath: '/about' },
        component: () => import(/* webpackChunkName: "about" */ './views/about/About'),
      },
      {
        path: '/dx',
        alias: '/dx/*',
        meta: { basePath: '/dx' },
        component: () => import(/* webpackChunkName: "dx" */ './views/dx/Main'),
      },
      {
        path: '/test',
        alias: '/test/*',
        component: () => import(/* webpackChunkName: "test" */ './views/Test.vue'),
      },
    ],
  }),
})
export default class App extends Vue {

  public value: number = 0;

  public version: string = '1.0.0';

}
