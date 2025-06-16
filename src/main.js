import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// mitt config
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.provide("emitter", emitter);
app.use(router).mount("#app");
app.directive("color", (el, ord) => {
  el.style.color = ord.value;
});
app.directive("maxsize", (el, val) => {
  el.style.textDecoration = val.value;
});
