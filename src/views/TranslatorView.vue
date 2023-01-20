<script setup>
import UebersetzungEingabe from "../components/UebersetzungEingabe.vue";
import SprachAnzeigeText from "../components/SprachAnzeigeText.vue";
import BestaetigeEingabeKnopf from "../components/BestaetigeEingabeKnopf.vue";
</script>

<template>
  <div class="min-vh-100 d-flex justify-content-around">
    <div class="col pt-5 bg-light text-center">
      <UebersetzungEingabe />
    </div>
    <div class="col pt-5 text-center">
      <SprachAnzeigeText />
    </div>
  </div>
  <BestaetigeEingabeKnopf />
</template>

