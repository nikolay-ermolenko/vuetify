import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import WithRender from './About.html';

@WithRender
@Component({
  router: new VueRouter({
    linkActiveClass: 'bg-blue-dark text-white',
    routes: [
      {
        path: '/about/about1',
        alias: '/about/about1/*',
        meta: { basePath: '/about' },
        component: () => import(/* webpackChunkName: "about-about1" */ '@/views/about/views/about1/About1'),
      },
      {
        path: '/about/about2',
        alias: '/about/about2/*',
        meta: { basePath: '/about' },
        component: () => import(/* webpackChunkName: "about-about2" */ '@/views/about/views/about2/About2'),
      },
    ],
  }),
})
export default class About extends Vue {

}
