import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router).mount("#app");
app.directive("color", (el, ord) => {
  el.style.color = ord.value;
});
app.directive("maxsize", (el, val) => {
  el.style.textDecoration = val.value;
});
