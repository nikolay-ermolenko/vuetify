<template>
  <v-switch v-model="darkMode" hide-details :label="darkMode ? darkModeOnLabel : darkModeOffLabel" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

const namespace: string = 'profile';

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

  @Getter('getDarkTheme')
  private DarkMode!: boolean;

  @Action('setDarkTheme')
  private SetDarkTheme!: any;

  public get darkMode(): boolean {
    return this.DarkMode;
  }

  public set darkMode(value: boolean) {
    this.SetDarkTheme(value);
    this.changeDarkMode();
  }

  @Emit('change')
  public changeDarkMode() {
    return this.darkMode;
  }

}
</script>
