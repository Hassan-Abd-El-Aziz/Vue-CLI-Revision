import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import prfile from "../views/Profile.vue";
import page2 from "../views/Page 2.vue";
import Notfound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      description: "this is St",
    },
    children: [
      {
        path: "/prfile",
        name: "prfile",
        component: prfile,
        meta: {
          title: "Prfile",
          description: "this is prfile",
        },
      },
      {
        path: "/page2",
        name: "two",
        component: page2,
        meta: {
          title: "page2",
          description: "this is prfile",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: Notfound,
    meta: {
      title: "Notfound",
      description: "this is Notfound page",
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
