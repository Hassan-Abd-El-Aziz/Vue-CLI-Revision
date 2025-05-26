<template>
  <h1>activ daat is {{ name }}</h1>
  <slot name="slotName"></slot>
  <button @click="update">Change</button>
</template>

<script>
export default {
  data() {
    return {
      activ: this.act,
    };
  },
  props: ["name"],
  methods: {
    update() {
      this.$emit("update", "zizo");
    },
  },
};
</script>
