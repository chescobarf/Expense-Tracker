<template>
  <div
    class="bg-white border rounded-1 shadow-md b-r-4 p-4 flex justify-between pr-8"
    :class="[isIncome ? 'b-r-green' : 'b-r-red']"
  >
    <span>{{ transaction.name }}</span>
    <span>$ {{ transaction.price.toLocaleString("es-CL") }}</span>
  </div>
</template>
Transaction

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  transaction: {
    name: string;
    price: number;
  };
}>();

const isIncome = computed(() => (props.transaction.price > 0 ? true : false));
</script>

<style scoped></style>
