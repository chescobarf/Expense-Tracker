<template>
  <div class="font-roboto font-400 text-2xl flex gap-3">
    <h2 class="text-dark">Your Balance:</h2>
    <h3>${{ total }}</h3>
  </div>
</template>

<script setup lang="ts">
import { total } from "../stores/store";
</script>

<style scoped></style>
