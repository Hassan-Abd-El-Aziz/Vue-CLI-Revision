<template>
  <h1>Heloo students</h1>
  <my-student>
    <template #input>
      <input type="text" placeholder="Name" v-model="student.name" />
      <input type="number" placeholder="Age" v-model="student.age" />
    </template>
    <template #check>
      <div>
        skills
        <label for="html">HTML</label>
        <input type="checkbox" v-model="student.skills.html" id="html" />
        <label for="Css">CSS</label>
        <input type="checkbox" v-model="student.skills.css" id="Css" />
      </div>
    </template>
    <template #Btn> <button @click="addData">Add</button> </template>
    <template #data>
      <ul>
        <li v-for="(stu, i) in students" :key="i">
          <p>{{ stu.name }}</p>
          <p>{{ stu.age }}</p>
          <p v-for="(val, i) in stu.skills" :key="i">
            <span v-if="val === true">skills is :{{ val }}</span>
          </p>
        </li>
      </ul>
    </template>
  </my-student>
</template>
<script>
import MyStudent from "@/components/MyStudents";
export default {
  data() {
    return {
      students: [],
      student: { name: "", age: "", skills: [{ html: "html", css: "css" }] },
    };
  },
  components: {
    MyStudent,
  },
  methods: {
    addData() {
      this.students.push(this.student);
      console.log(this.students);
      console.log(this.students.skills);
    },
  },
};
</script>
