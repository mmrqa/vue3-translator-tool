<template>
  <h3 class="mb-5">Basissprache ist: {{ headerBaseLanguage }}</h3>

  <div>
    <p class="text-wrap fw-normal text-start mx-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerBaseLanguage: "Deutsch",
    };
  },
};
</script>
<style></style>
