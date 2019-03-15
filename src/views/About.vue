<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MainColorSelector @change="onChange"/>
    <v-btn-toggle>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/test">Test</v-btn>
      <v-btn to="/about/tab1">Tab1</v-btn>
    </v-btn-toggle>d
    <router-view />d
    
  </div>
</template>

<script lang="ts">
import Router from 'vue-router';
import { Component, Vue } from 'vue-property-decorator';
import MainColorSelector from '@/components/MainColorSelector.vue';
import Tab1 from '@/views/Tab1.vue';

@Component({ components: { MainColorSelector } })
export default class About extends Vue {
  public onChange(color: string): void {
    // console.log('MainColorSelectoronChange', color);
  }

  public created() {
    if (this.routeNameAlreadyRegistered(this.$router, 'tab1')) {
      return;
    }
    // console.log(111, this.getParentRouterPath(this),
    // this.getParentRouterPath(this) + '/tab1'
    // );

    this.$router.addRoutes([{
      name: 'tab1',
      path: this.getParentRouterPath(this) + '/tab1',
      alias: this.getParentRouterPath(this) + 'tab1/*',
      meta: {basePath: this.getParentRouterPath(this) + '/tab1'},
      component: Tab1,
      // component: () => import (/* webpackChunkName: "about-tab1" */ './Tab1.vue'),
    }]);
    // this.$router.addRoutes([{
    //   name: 'tab1',
    //   path: '/about/tab1',
    //   alias: '/about/tab1/*',
    //   meta: {basePath: '/about/tab1'},
    //   component: Tab1,
    // }]);


    // path: '/about',
    //     alias: '/about/*',
    //     meta: {basePath: '/about'},
    // this.$router.addRoutes([{
    //   name: 'tab1',
    //   path: this.getParentRouterPath(this) + '/tab1',
    //   alias: this.getParentRouterPath(this) + '/tab1/*',
    //   meta: {basePath: this.getParentRouterPath(this) + '/tab1'},
    //   component: Tab1
    // }]);


    // console.log(2222, this.$router);
    // this.routeNameAlreadyRegistered(this.$router, 'sss'),
    // this.getParentRouterPath(this));
  }

  public getParentRouterPath(instance: Vue): string {
    try {
      return instance.$parent.$route.meta.basePath || '';
    } catch (e) {
      return '';
    }
  }

  public routeNameAlreadyRegistered(router: Router, routeName: string): boolean {
    const registered = router.resolve({ name: routeName });
    if (registered && registered.href !== '#/' && registered.href !== '/') {
      return true;
    }
    return false;
  }
}
</script>
