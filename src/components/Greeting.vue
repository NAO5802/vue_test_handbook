<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Greeting",
  data() {
    return {
      greeting: "Vue and TDD",
    };
  },
});
</script>

<template>
  <div>
    {{ greeting }}
  </div>
</template>

<style scoped></style>
