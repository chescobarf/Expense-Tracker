<script setup lang="ts">
import Balance from "./components/Balance.vue";
import Resume from "./components/Resume.vue";
import Historial from "./components/Historial.vue";
</script>

<template>
  <main class="">
    <div class="container mx-a">
      <h1 class="font-roboto text-2xl font-400 text-center text-dark">
        Expense Tracker
      </h1>
      <Balance class="mb-10" />
      <Resume class="mb-30" />
      <Historial />
    </div>
  </main>
</template>

<style scoped></style>
