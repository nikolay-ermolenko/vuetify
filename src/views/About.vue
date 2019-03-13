<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MainColorSelector @change="onChange"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainColorSelector from '@/components/MainColorSelector.vue';

@Component({components: {MainColorSelector}})
export default class About extends Vue {

  public onChange(color: string): void {
    console.log('MainColorSelectoronChange', color);
  }
}
</script>
