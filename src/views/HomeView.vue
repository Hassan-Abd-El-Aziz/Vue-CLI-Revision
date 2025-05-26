<template>
  <div class="home">
    <h1>Hello Our Family</h1>
    <students :name="name" @update="changact($event)">
      <template #slotTitle>
        <h2>Hi from slot</h2>
      </template>
      <template #slotName>
        <h2>Hi zizo</h2>
      </template>
    </students>
  </div>
</template>

<script>
import Students from "@/components/MyStudents";
export default {
  data() {
    return {
      name: "Mido",
      activ: false,
    };
  },
  components: {
    Students,
  },
  methods: {
    changact(data) {
      if (this.name === "mido") {
        this.name = data;
      } else {
        this.name = "mido";
      }
    },
  },
  //Hocks
  beforeCreate() {
    alert("Hello");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    alert("BMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    alert("update");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    alert("delet");
  },
  unmounted() {
    console.log("Deleted");
  },
};
</script>
