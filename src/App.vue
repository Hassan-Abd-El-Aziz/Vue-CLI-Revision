<template>
  <ul>
    <li v-for="link in myRoter" :key="link.name">
      <router-link
        v-if="(link.name = !'prfile')"
        :to="{
          name: link.name,
          query: { age: 50 },
        }"
        >{{ link.meta.title }}</router-link
      >
    </li>
  </ul>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      myRoter: [],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.go(1);
    },
    replace() {
      this.$router.replace({ name: "home" });
    },
  },
  mounted() {
    this.myRoter = this.$router.options.routes;
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
