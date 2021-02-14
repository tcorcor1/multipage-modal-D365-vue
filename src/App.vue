<template>
  <div id="app">
    <section class="head-nav">
      <div>
        <button
          v-if="this.$route.name !== this.steps[0]"
          @click="previousPage()"
          class="button is-link is-outlined is-medium is-rounded"
        >
          Back
        </button>
      </div>
      <div>
        <button
          v-if="this.$route.name !== this.steps[this.steps.length - 1]"
          @click="nextPage()"
          class="button is-link is-outlined is-medium is-rounded"
        >
          Next
        </button>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    nextPage() {
      let currPageIndex = this.steps.indexOf(this.$route.name);
      const nextPage = this.steps[++currPageIndex];
      this.$router.push({ name: nextPage });
    },

    previousPage() {
      let currPageIndex = this.steps.indexOf(this.$route.name);
      const previousPage = this.steps[--currPageIndex];
      this.$router.push({ name: previousPage });
    },
  },
  mounted() {
    //force router
    this.$router.push({ name: 'ModalStart' });
  },
};
</script>

<style>
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.25em;
  padding: 0 10% 0 10%;
}

.head-nav {
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-between;
}

.body {
  min-height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
