<template>
  <button @click="global">click</button>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      name: "zizo",
    };
  },
  inject: ["emitter"],
  methods: {
    global() {
      this.emitter.emit("gevent", this.name);
    },
  },
};
</script>
