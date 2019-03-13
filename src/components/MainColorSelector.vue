<template>
  <v-select v-model="color" :items="mainColors" box label="Main Color"/>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

const namespace: string = 'profile';

@Component
export default class MainColorSelector extends Vue {
  @Getter('getAvailableColors')
  public mainColors!: string[];

  @Getter('getMainColor')
  private MainColor!: string;

  @Action('updateMainColor')
  private SetMainColor!: any;

  public get color(): string {
    return this.MainColor;
  }

  public set color(value: string) {
    this.SetMainColor(value);
    this.changeMainColor();
  }

  @Emit('change')
  public changeMainColor() {
    return this.color;
  }
}
</script>
