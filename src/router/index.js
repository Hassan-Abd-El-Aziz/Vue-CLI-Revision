import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "@/views/StudentView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/st",
    name: "stu",
    component: StudentView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
