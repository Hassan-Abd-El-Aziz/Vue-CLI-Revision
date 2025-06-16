import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import prfile from "../views/Profile.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      description: "this is St",
    },
  },
  {
    path: "/prfile:/id/desc/title",
    name: "prfile",
    component: prfile,
    meta: {
      title: "Prfile",
      description: "this is prfile",
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
