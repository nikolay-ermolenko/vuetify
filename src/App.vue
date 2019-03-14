<template>
  <v-app :dark="darkMode" v-resize="onResize">
    <v-navigation-drawer
      temporary
      disable-resize-watcher
      :width="getDrawerWidth"
      fixed
      v-model="drawer"
      app
    >
      <v-toolbar>
        <v-btn-toggle v-model="toggleExclusive">
          <v-btn :value="1" flat>
            <v-icon>format_align_left</v-icon>
          </v-btn>
          <v-btn :value="2" flat>
            <v-icon>format_align_center</v-icon>
          </v-btn>
          <v-btn :value="3" flat>
            <v-icon>format_align_right</v-icon>
          </v-btn>
          <v-btn :value="4" flat>
            <v-icon>format_align_justify</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-divider vertical />
        <DarkModeSwitch />
        <v-divider vertical />
        {{ toggleExclusive || 0 }}
        <v-divider vertical />
        <MainColorSelector />
      </v-toolbar>
      <div id="nav" class="navigation">
        <v-btn-toggle>
          <v-btn to="/">Home</v-btn>
          <v-btn to="/about">About</v-btn>
          <v-btn to="/test">Test</v-btn>
        </v-btn-toggle>
      </div>
      <DarkModeSwitch />
      
    </v-navigation-drawer>

    <v-navigation-drawer
      temporary
      disable-resize-watcher
      fixed
      right
      :width="getDrawerWidth * .6"
      v-model="drawerRight"
      app
    >
     <v-content>
       1231231
      <DarkModeSwitch darkModeOnLabel="Тьма режим!!!111" @change="onDarkModeChange" />
     </v-content>
    
    </v-navigation-drawer>


    <v-toolbar :color="mainColor" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        Application
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"/>
    </v-toolbar>

   
    <v-content>
       <v-container fluid>
        <router-view/>
      </v-container>
      {{ version }} :: {{ mainColor }} <DarkModeSwitch /> 
      <div v-if="profile.user">
        <p>
            Full name: {{ fullName }}
        </p>
        <p>
            Email: {{ profile.user.email }}
        </p>       
      </div>
    </v-content>
    <v-footer app>Just Footer :: version: {{ version }} </v-footer>
  </v-app>
</template>


<script lang="ts">
import VueRouter from 'vue-router';
import { Component, Vue } from 'vue-property-decorator';
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ProfileState, User } from '@/store/modules/profile/types';
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
import MainColorSelector from '@/components/MainColorSelector.vue';
// import router from '@/router';

Vue.use(VueRouter);

const namespace: string = 'profile';

@Component({
  components: {
    DarkModeSwitch,
    MainColorSelector,
  },
  router: new VueRouter({
    linkActiveClass: "text-blue font-bold",
    routes: [
      { 
        path: '/about',
        alias: '/about/*',
        meta: {basePath: '/about'},
        component: () => import (/* webpackChunkName: "about" */ './views/About.vue'),
      },
      { 
        path: '/test', 
        alias: '/test/*',
        component: () => import (/* webpackChunkName: "test" */ './views/Test.vue'),
      }
    ]
  }),
})
export default class App extends Vue {

  private WindowWidth: number = 0;
  private WindowHeight: number = 0;

  @Action('fetchData', { namespace })
  private FetchData: any;

  @State('profile')
  public profile!: ProfileState;

  @Getter('getVersion')
  public version!: string;

  @Getter('getDarkTheme')
  public darkMode!: boolean;

  @Getter('getMainColor')
  public mainColor!: string;

  @Getter('fullName', { namespace })
  public fullName!: string;

  public drawer: boolean = false;
  public drawerRight: boolean = false;
  public toggleExclusive: number = 0;

  public get getDrawerWidth() {
    const width: number = (this.WindowWidth || 300) * .7;
    return width < 150
      ? 150
      : (
        width > 700
          ? 700
          : width
        );
  }

  public onDarkModeChange(state: boolean): void {
    console.log('onDarkModeChange', state);
  }

  public mounted() {
    setTimeout(this.FetchData, 2000);
  }


  public onResize(): void {
    this.WindowWidth = window.innerWidth;
    this.WindowHeight = window.innerHeight;
  }
  // @State('profile')
  // public profile: ProfileState;

  //     constructor(
  //       profile: ProfileState
  //     ) {
  // super();
  //     }

  // @Action('fetchData', { namespace }) fetchData: any;
}

// import { Component, Vue } from 'vue-property-decorator';
// import { mapActions } from 'vuex';
// import DarkModeSwitch from '@/components/DarkModeSwitch.vue';

// @Component({
//   components: {
//     DarkModeSwitch,
//   },
//   data: () => ({
//     windowSize: {
//       x: 0,
//       y: 0,
//     },
//     toggleExclusive: null,
//     color: null,
//   }),
//   computed: {
//     getDrawerWidth() {
//       const width: number = this.$data.windowSize.x * .7;
//       return width < 150
//         ? 150
//         : (
//           width > 700
//             ? 700
//             : width
//           );
//     },
//   },
//   methods: {
//     ...mapActions(['updateMainColor']),
//     ...mapActions({
//       changeMainColor: 'updateMainColor',
//     }),
//     // toggleExclusive() {
//     //   console.log(333333);

//     //   return this.$data.toggleExclusive;
//     // },
//   },
// })
// export default class App extends Vue {
//   public drawer: boolean = false;
//   public drawer2: boolean = false;

//   public get darkMode(): boolean {
//     return this.$store.getters.getDarkTheme;
//   }
//   public set darkMode(value: boolean) {
//     this.$store.commit('setDarkTheme', value);
//   }
//   public mainColors: string[] = ['primary', 'blue-grey', 'light-green', 'red'];

//   public mounted(): void {
//     // this.onResize();
//   }

//   public onResize(): void {
//     // console.log(111, this.drawer);
//     // this.drawer = false;
//     this.$data.windowSize = { x: window.innerWidth, y: window.innerHeight };
//   }

//   public onDarkModeChange(): void {
//     console.log(111, arguments);

//   }
// }

// @Component({
//   data: () => ({
//     drawer: null,
//     mode: false,
//     mainColors: [
//       'primary',
//       'blue-grey',
//       'light-green',
//       'red',
//       ],
//     windowSize: {
//       x: 0,
//       y: 0
//     }
//   }),
//   mounted () {
//     this.onResize();
//   },
//   methods: {
//     ...mapActions([
//       'updateMainColor',
//     ]),
//     ...mapActions({
//       changeMainColor : 'updateMainColor',
//     }),
//     onResize () {

//       this.windowSize = { x: window.innerWidth, y: window.innerHeight };
//         console.log(this.windowSize);
//     }
//   },
// })
// export default class App extends Vue {}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;

  .navigation {
    font-size: 1.5em;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
