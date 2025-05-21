<template>
  <div class="home">
    <h1>Hello Our Family</h1>
    <Students :st="students" :nam="name" />
  </div>
</template>

<script>
import Students from "@/components/MyStudents";
export default {
  data() {
    return {
      students: ["Hassan", "Ahemd", "zizo"],
      name: "Mido",
    };
  },
  components: {
    Students,
  },
};
</script>
