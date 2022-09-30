<template>
  <h3 class="mb-5">Deine Übersetzung:</h3>
  <div>
    <textarea
      placeholder="Gib hier deine Übersetzung ein: "
      class="w-100 px-5"
      oninput="this.style.height = '';this.style.height = this.scrollHeight + 'px'"
    ></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
textarea {
  border: none;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  resize: none; /*remove the resize handle on the bottom right*/
}
</style>
