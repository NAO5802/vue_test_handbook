<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Emitter",
  methods: {
    emitEvent() {
      this.$emit('myEvent', 'name', 'password')
    }
  }
})
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
