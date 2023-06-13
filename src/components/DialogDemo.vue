<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import { ref, h } from "vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    const x = ref(false);

    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
