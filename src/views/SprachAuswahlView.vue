<script setup>
import SprachAuswahlSelect from "../components/SprachAuswahlSelect.vue";
</script>

<template>
  <div class="center">
    <SprachAuswahlSelect />
  </div>
</template>

<style scoped>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
