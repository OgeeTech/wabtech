import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import NotFound from "../views/NotFound.vue";
import AcademyView from "../views/AcademyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
    {
      path: "/academy",
      name: "academy",
      component: AcademyView,
    },
  ],
});

export default router;
