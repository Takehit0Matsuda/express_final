import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () =>
      import(/* webpackChunkName: "reviews" */ "../views/Post_list.vue"),
  },
  {
    path: "/post_review",
    name: "PostReviews",
    component: () =>
      import(/* webpackChunkName: "post_review" */ "../views/PostView.vue"),
  },
  {
    path: "/reviews/:id",
    name: "PostDetails",
    component: () =>
      import(/* webpackChunkName: "post_details" */ "../views/PostDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
