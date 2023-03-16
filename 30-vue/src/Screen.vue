<template>
  <h3>{{ title }}</h3>
  <!--  <input v-model="title" />-->
  <Counter />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Counter from "./Counter.vue";

const title = ref("Vue Demo");
</script>

<style scoped></style>
