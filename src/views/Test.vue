<template>
  <div class="about">
    <h1>This is an TEST page
      <DarkModeSwitch class="right" darkModeOnLabel="Тьма над нами!" darkModeOffLabel="Да будет СВЕТ!!" />

    </h1>
    <v-btn color="primary" outline large round @click="incrementClick">Increment</v-btn>
    <blockquote class="blockquote">{{ getCount }}</blockquote>
    <v-img
      :src="getSrc"
      :lazy-src="getLazySrc"
      aspect-ratio="1"
      class="grey lighten-2"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DarkModeSwitch from '@/components/DarkModeSwitch.vue';

@Component({components: {DarkModeSwitch}})
export default class Test extends Vue {
  private src: string = 'https://picsum.photos/1800/1100?image=';

  private lazySrc: string = 'https://picsum.photos/50/30?image=';

  public get getCount(): number {
    return this.$store.getters.getCount;
  }

  public get getSrc(): string {
    return this.src + this.getCount;
  }

   public get darkMode(): boolean {
    return this.$store.getters.getDarkTheme;
  }
  public set darkMode(value: boolean) {
    this.$store.commit('setDarkTheme', value);
  }

  public get getLazySrc(): string {
    return this.lazySrc + this.getCount;
  }

  public incrementClick() {
    this.$store.dispatch('incrementCount')
      .then(() => this.$emit('incremented'));
  }
}
</script>