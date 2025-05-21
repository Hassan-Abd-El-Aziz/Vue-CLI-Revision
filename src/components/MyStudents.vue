<template>
  <h1>Hello {{ nam }} {{ act }}</h1>
  <ul>
    <li v-for="(stude, i) in st" :key="i">{{ stude }}</li>
  </ul>
  <button @click="delet">click</button>
  <button @click="activ != activ">act</button>
</template>
<script>
export default {
  data() {
    return {
      data: this.st,
      activ: this.act,
    };
  },
  props: ["st", "nam", "act"],
  methods: {
    delet() {
      this.data.pop();
    },
  },
};
</script>
