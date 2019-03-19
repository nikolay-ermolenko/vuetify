import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import WithRender from './Main.html';

@WithRender
@Component({
  router: new VueRouter({
    linkActiveClass: 'bg-blue-dark text-white',
    routes: [
      {
        path: '/dx/users',
        alias: '/dx/users/*',
        meta: { basePath: '/dx' },
        component: () => import(/* webpackChunkName: "dx-users" */ './views/users/List'),
        children: [
          {
            path: '/dx/users/:id',
            meta: { basePath: '/dx/users' },
            props: true,
            component: () => import(/* webpackChunkName: "dx-users-card" */ './views/users/Card'),
          },
          {
            path: '/dx/users/:id/edit',
            meta: { basePath: '/dx/users' },
            props: true,
            component: () => import(/* webpackChunkName: "dx-users-edite" */ './views/users/Edit'),
          },
        ]
      },
    ],
  }),
})
export default class Main extends Vue {

}
