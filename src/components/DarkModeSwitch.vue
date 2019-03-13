<template>
  <v-switch v-model="darkMode" hide-details :label="darkMode ? darkModeOnLabel : darkModeOffLabel" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class DarkModeSwitch extends Vue {

  @Prop({
    default: 'Dark Mode',
  })
  public readonly darkModeOnLabel!: string;

  @Prop({
    default: 'Light Mode',
  })
  public readonly darkModeOffLabel!: string;

  public get darkMode(): boolean {
    return this.$store.getters.getDarkTheme;
  }

  public set darkMode(value: boolean) {
    this.$store.commit('setDarkTheme', value);
    this.changeDarkMode();
  }

  @Emit('change')
  public changeDarkMode() {
    return this.darkMode;
  }
}
</script>
