<template>
  <div>
    <h2>{{ headerText }}</h2>
    <v-select :options="sprachen"> </v-select>
    <div class="d-grid gap-2 col-4 mt-3 mx-auto">
      <button type="button" class="btn btn-outline-success" @click="fire">
        Lets go!
      </button>
    </div>
  </div>
</template>

<script>
const API_URL = 'https://sprache.free.beeceptor.com/Sprache';

export default {
  data() {
    return {
      headerText: "Wähle aus in welche Sprache du übersetzen möchtest:",
      sprachen: [],
    };
  },
  created() {
    // fetch on initalization
    this.getSprachen();
  },
  methods: {
    fire() {
      this.$router.push("/translator");
    },
    async getSprachen(){
      let response = await (await fetch(API_URL)).json();
      this.sprachen = Object.values(response);
    }
  },
};
</script>
