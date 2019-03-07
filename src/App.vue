<template>
  <v-app :dark="darkMode" v-resize="onResize">
    <v-navigation-drawer
      class="aaaaaa"
      temporary
      disable-resize-watcher
      :width="$data.windowSize.x * .5"
      fixed
      v-model="drawer"
      app
    >
      {{ $store.getters.getCount }}
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/test">Test</router-link>
      </div>
      <v-switch v-model="darkMode" :label="`${darkMode ? 'Dark' : 'Light'} Mode`" hide-details/>
      <v-select @change="changeMainColor" :items="mainColors" box label="Box style"/>
    </v-navigation-drawer>

    <v-navigation-drawer
      temporary
      disable-resize-watcher
      fixed
      right
      :width="$data.windowSize.x * .9"
      v-model="drawer2"
      app
    >1231231</v-navigation-drawer>
    <v-toolbar :color="$store.getters.getMainColor" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer2 = !drawer2"/>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  methods: {
    ...mapActions(['updateMainColor']),
    ...mapActions({
      changeMainColor: 'updateMainColor',
    }),
  },
})
export default class App extends Vue {
  public drawer: boolean = false;
  public drawer2: boolean = false;
  public darkMode: boolean = false;

  public mainColors: string[] = ['primary', 'blue-grey', 'light-green', 'red'];

  public mounted(): void {
    // this.onResize();
  }

  public onResize(): void {
    console.log(111, this.drawer);
    
    // this.drawer = false;
    this.$data.windowSize = { x: window.innerWidth, y: window.innerHeight };
  }
}

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
