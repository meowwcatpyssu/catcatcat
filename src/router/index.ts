import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue"; // создадим позже, если нет
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
