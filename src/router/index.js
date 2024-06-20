import { createRouter, createWebHistory } from "vue-router";
import adminSideBar from "../layouts/mypageSideBar.vue";
import footer from "../layouts/footer.vue";
import header from "../layouts/header.vue";
import Main from "../views/Main.vue"
import Basket from "../views/basket.vue";
import SignUp from "../views/SignUp.vue";
import SignUpAgreement from "../views/SignUpAgreement.vue";
import Login from "../views/Login.vue";
import orderList from "../views/orderList.vue";
import findId from "../views/findId.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/sidebar",
    name: "adminSideBar",
    component: adminSideBar,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/footer",
    name: "footer",
    component: footer,
  },
  {
    path: "/header",
    name: "header",
    component: header,
  },
  {
    path: "/basket",
    name: "basket",
    component: Basket,
  },
  {
    path: "/join",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/agreement",
    name: "SignUpAgreement",
    component: SignUpAgreement,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/orderList",
    name: "orderList",
    component: orderList,
  },
  {
    path: "/findId",
    name: "findId",
    component: findId,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
