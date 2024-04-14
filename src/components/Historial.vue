<template>
  <div>
    <h2 class="text-5 text-dark mb-7 b-b-coolgray border-b-1 pb-3 border-op-50">
      Historial:
    </h2>
    <ul class="flex flex-col gap-2">
      <template v-for="transaction in transactions">
        <Transaction :transaction="transaction" />
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Transaction from "./Transaction.vue";
import { transactions } from "@/stores/store";
</script>

<style scoped></style>
