import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/layouts/root.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "/table-of-students",
          name: "table",
          component: () => import("@/pages/tableStudents.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/pages/about.vue"),
        },
        {
          path: "/create-student",
          name: "createStudent",
          component: () => import("@/pages/createStudent.vue"),
        },
        {
          path: "/create-student/:slug",
          name: "editStudent",
          component: () => import("@/pages/createStudent.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/layouts/error.vue"),
      meta: { title: "Not found page" },
    },
  ],
});

export default router;
