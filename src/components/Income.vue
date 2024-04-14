<template>
  <div class="text-center flex flex-col">
    <span class="text-dark uppercase">Income</span>
    <span class="text-green"
      >+ ${{ Math.abs(totalIncomes).toLocaleString("es-CL") }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { totalIncomes } from "../stores/store";
</script>

<style lang="scss" scoped></style>
