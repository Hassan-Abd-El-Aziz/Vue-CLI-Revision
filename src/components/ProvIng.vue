<template>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ say }}</h1>
</template>

<script>
export default {
  inject: ["name", "age", "say", "emitter"],
  mounted() {
    this.emitter.on("gevent", (data) => {
      console.log("WellCome Back " + data);
    });
  },
};
</script>
