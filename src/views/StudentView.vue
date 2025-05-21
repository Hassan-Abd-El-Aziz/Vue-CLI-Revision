<template>
  <div class="studen">
    <h1>Heloo students</h1>
    <MyStudent :st="list" :nam="name" :act="isAct" />
  </div>
</template>
<script>
import MyStudent from "@/components/MyStudents";
export default {
  data() {
    return {
      list: ["Mohamed", "Fatma", "Rofi"],
      name: "zizo",
      isAct: true,
    };
  },
  components: {
    MyStudent,
  },
};
</script>
