<template>
  <div class="about">
    <h1>This is an TEST page</h1>
    <v-btn color="primary" outline large round @click="incrementClick">Increment</v-btn>
    <blockquote class="blockquote">
      {{ getCount }}
    </blockquote>
    <v-img
      :src="`https://picsum.photos/2000/1200?image=${getCount}`"
      :lazy-src="`https://picsum.photos/5/3?image=${getCount}`"
      aspect-ratio="1"
      class="grey lighten-2"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    // aaa: 3,
  }),
  methods: {
    incrementClick() {
      // this.aaa = 44;
      this.$store.dispatch('incrementCount');
    },
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
})
export default class Test extends Vue {}
</script>