<template>
  <v-app :dark="darkMode" v-resize="onResize">
    <v-navigation-drawer
      class="aaaaaa"
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
               <v-divider vertical></v-divider>
               <DarkModeSwitch />
{{ toggleExclusive }}
  <v-divider vertical></v-divider>
<v-select v-model="color" @change="changeMainColor" :items="mainColors" box label="Box style"/>

</v-toolbar>

      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/test">Test</router-link>
      </div>
      <DarkModeSwitch />      
      <v-select  v-model="color" @change="changeMainColor" :items="mainColors" box label="Box style"/>
    </v-navigation-drawer>

    <v-navigation-drawer
      temporary
      disable-resize-watcher
      fixed
      right
      :width="$data.windowSize.x * .9"
      v-model="drawer2"
      app
    >1231231
    <DarkModeSwitch darkModeOnLabel="Тьма режим!!!111" @change="onDarkModeChange" />
    
    </v-navigation-drawer>
    <v-toolbar :color="$store.getters.getMainColor" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
       
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
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';

@Component({
  components: {
    DarkModeSwitch,
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
    toggleExclusive: null,
    color: null,
  }),
  computed: {
    getDrawerWidth() {
      const width: number = this.$data.windowSize.x * .7;
      return width < 150
        ? 150
        : (
          width > 700
            ? 700
            : width
          );
    },
  },
  methods: {
    ...mapActions(['updateMainColor']),
    ...mapActions({
      changeMainColor: 'updateMainColor',
    }),
    // toggleExclusive() {
    //   console.log(333333);

    //   return this.$data.toggleExclusive;
    // },
  },
})
export default class App extends Vue {
  public drawer: boolean = false;
  public drawer2: boolean = false;

  public get darkMode(): boolean {
    return this.$store.getters.getDarkTheme;
  }
  public set darkMode(value: boolean) {
    this.$store.commit('setDarkTheme', value);
  }
  public mainColors: string[] = ['primary', 'blue-grey', 'light-green', 'red'];

  public mounted(): void {
    // this.onResize();
  }

  public onResize(): void {
    // console.log(111, this.drawer);
    // this.drawer = false;
    this.$data.windowSize = { x: window.innerWidth, y: window.innerHeight };
  }

  public onDarkModeChange(): void {
    console.log(111, arguments);
    
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
