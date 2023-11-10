<script lang="ts">
import {defineComponent} from 'vue'
import Child from "@/components/Child.vue";

export default defineComponent({
  name: "Parent",
  components: {Child}
})
</script>

<template>
  <div><Child /></div>
</template>

<style scoped>

</style>
