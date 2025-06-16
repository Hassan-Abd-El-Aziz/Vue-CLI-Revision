<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Hello</h1>
  <button @click="getData">Click Hear</button>
  <ul>
    <li v-for="pro in products" :key="pro.id">
      {{ pro.title }}
      {{ pro.id }}
      {{ pro.description }}
      <button @click="toData('prfile', pro.id, pro.description, pro.title)">
        toprof
      </button>
      <hr />
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getData() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          console.log(this.products);
        });
    },
    toData(view, id, description, title) {
      this.$router.push({
        name: view,
        params: { Id: id, description: description },
        query: { title: title },
      });
    },
  },
};
</script>
