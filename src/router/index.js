import { createRouter, createWebHistory } from "vue-router";
import Watch from "../views/Watchers.vue";
import Prov from "../views/Provied.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Watch,
    meta: {
      title: "Home",
      description: "this is St",
    },
  },
  {
    path: "/prov",
    name: "provide",
    component: Prov,
    meta: {
      title: "Prov",
      description: "this is St",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
