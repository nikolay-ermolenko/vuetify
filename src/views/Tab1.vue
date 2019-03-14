<template>
  <div class="about">
    <h1>TAB 1</h1>
    <MainColorSelector />
    qweqweq
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainColorSelector from '@/components/MainColorSelector.vue';

@Component({ components: { MainColorSelector } })
export default class Tab1 extends Vue {}
</script>
