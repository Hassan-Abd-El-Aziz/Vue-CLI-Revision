<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input type="text" placeholder="enter name" v-model="users.uname" />
  <input type="text" placeholder="enter name" v-model="users.age" />
  <p>{{ users.uname }}</p>
  <p>{{ users.age }}</p>
  <hr />
  <button @click="myArray.push('mizoo')">Push</button>
  <button @click="myArray.push('figo')">Push</button>
</template>
<script>
export default {
  data() {
    return {
      users: { uname: "hassan", age: 100 },
      myArray: [],
    };
  },
  watch: {
    myArray: [
      {
        handler(nval) {
          console.log(nval);
        },
        deep: true,
      },
    ],
    users: {
      handler(val1, val2) {
        console.log("new val" + val1);
        console.log(val2);
      },
      deep: true,
    },
  },
};
</script>
