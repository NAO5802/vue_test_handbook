<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormSubmitter",
  data() {
    return {
      username: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
  },
});
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div class="message" v-show="submitted">
      {{ username }}さん、お問い合わせ、ありがとうございます。
    </div>
  </div>
</template>

<style scoped></style>
