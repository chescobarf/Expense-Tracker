<template>
  <div class="bg-white border rounded-4 shadow-md">
    <div class="px-10 py-10 flex flex-row justify-center gap-10">
      <Income />
      <span class="h-auto w-1 bg-lightBlue bg-op-30 rounded-10"></span>
      <Expense />
    </div>
  </div>
</template>
<script setup lang="ts">
import Expense from "./Expense.vue";
import Income from "./Income.vue";
</script>

<style scoped></style>
