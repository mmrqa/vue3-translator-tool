import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SprachAuswahlView.vue"),
    },
    {
      path: "/translator",
      name: "translator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TranslatorView.vue"),
    },
  ],
});

export default router;
