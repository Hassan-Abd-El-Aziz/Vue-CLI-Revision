<template>
  <keep-alive>
    <my-student :name="name" v-if="isAct">
      <h1>Heloo Login</h1>
      <template #input>
        <input type="text" v-model.lazy="name" placeholder="Name" />
        <input type="password" placeholder="password" />
        <div>
          <h3>Skills</h3>
          <label for="femal">Female</label>
          <p>{{ gender.male }}</p>
          <input type="radio" id="femal" v-model="gender.femal" value="femal" />
          <label for="mal">Male</label>
          <input type="radio" id="Male" v-model="gender.male" value="male" />
        </div>
        <div>
          <h1>skills</h1>
          <label for="html">Html</label>
          <input type="checkbox" v-model="skills.html" />
          <label for="css">css</label>
          <input type="checkbox" v-model="skills.css" />
        </div>
        <label for="gread">select gread</label>
        <select name="gread" id="gread" v-model="gread">
          <option value="val-one">one</option>
          <option value="val-two">two</option>
          <option value="val-three">three</option>
          <option value="val-four">four</option>
        </select>
        <h2>{{ gread }}</h2>
        <label for="nots">Nots</label>
        <textarea
          name="nots"
          id="nots"
          cols="50"
          rows="3"
          v-model="Bio"
        ></textarea>
        <button @click="addData">click</button>
      </template>
    </my-student>
  </keep-alive>
</template>

<script>
import MyStudent from "@/components/MyStudents.vue";
export default {
  data() {
    return {
      gread: "",
      isAct: true,
      name: "zizo",
      gender: [{ male: "Male", femal: "" }],
      skills: [{ html: false, css: false }],
      Bio: "",
    };
  },
  components: {
    MyStudent,
  },
  methods: {
    addData() {
      console.log(this.gender.male);
      console.log(this.skills.html);
      console.log(this.Bio);
    },
  },
};
</script>
