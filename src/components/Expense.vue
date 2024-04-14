<template>
  <div class="text-center flex flex-col">
    <span class="text-dark uppercase">Expense</span>
    <span class="text-red">
      - ${{ Math.abs(totalExpenses).toLocaleString("es-CL") }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { totalExpenses } from "../stores/store";
</script>

<style lang="scss" scoped></style>
