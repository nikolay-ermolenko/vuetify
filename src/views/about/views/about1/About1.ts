import { Component, Vue } from 'vue-property-decorator';
import WithRender from './About1.html';
import VueRouter from 'vue-router';

@WithRender
@Component({
  router: new VueRouter({
    routes: [
      {
        path: '/about/about1/:id',
        meta: { basePath: '/about' },
        props: true,
        component: () => import(/* webpackChunkName: "about-card" */ '@/views/about/views/card/Card'),
      },
    ],
  }),
})
export default class About1 extends Vue {

  public items: any[] = [
    { header: 'Today' },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      id: 1,
      subtitle: `<span class='text--primary'>
      Ali Connors
      </span>
      &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      id: 2,
      subtitle: `
      <span class='text--primary'>
      to Alex, Scott, Jennifer
      </span>
      &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    { divider: true, inset: true },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 3,
      subtitle: `<span class='text--primary'>
      Sandra Adams
      </span>
      &mdash; Do you have Paris recommendations? Have you ever been?`,
    },
    { header: 'Yesterday' },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Fkn sht!',
      id: 'sdfsfdf',
      subtitle: `<span class='text--primary'>
      Ali Connors
      </span>
      &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
  ];

  public getEditRoute(id: number): string {
    return `${this.$route.meta.basePath}/${id}/edit`;
  }

  public getCardRoute(id: number): string {
    return `${this.$route.meta.basePath}/${id}`;
  }
}
