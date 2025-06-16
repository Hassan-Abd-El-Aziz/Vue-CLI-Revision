<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ProvIng />
  <p>{{ age }}</p>
  <button @click="age++">clicj</button>
</template>
<script>
import ProvIng from "@/components/ProvIng.vue";
export default {
  data() {
    return {
      name: "Ahmed",
      age: 50,
    };
  },
  methods: {
    sayHelo() {
      return `Helloo ${this.name}`;
    },
  },
  components: { ProvIng },
  provide() {
    return { name: this.name, age: this.age, say: this.sayHelo() };
  },
};
</script>
