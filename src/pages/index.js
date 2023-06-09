import { createRouter, createWebHashHistory } from "vue-router";

import FormSignUp from '/src/components/Forms/FormSignUp.vue';
import FormForgetPassword from '/src/components/Forms/FormForgetPassword.vue';
import ReadVideo from '/src/components/ReadVideo.vue';
import PolitiquePage from '/src/components/Politique.vue';
import ConditionPage from '/src/components/Condition.vue';

const BrowsePage = () => import("./BrowsePage/index.vue");
const SearchPage = () => import("./SearchPage/index.vue");
const ReplayPage = () => import("./ReplayPage/index.vue");
const DirectPage = () => import("./DirectPage/index.vue");
const LoginPage = () => import("./LoginPage/index.vue");
const UserProfilePage = () => import("./UserProfilePage/index.vue");

const routes = [
  {
    path: "/login",
    component: LoginPage,
    props: { isHeader: false },
  },

  {
    path: "/signin",
    component: FormSignUp,
    props: { isHeader: false },
  },

  {
    path: "/forgetpassword",
    component: FormForgetPassword,
    props: { isHeader: false },
  },

  {
    path: "/politique",
    component: PolitiquePage,
    props: { isHeader: false },
  },
  {
    path: "/condition",
    component: ConditionPage,
    props: { isHeader: false },
  },

  {
    path: "/readvideo/:id",
    component: ReadVideo,
    props: { isHeader: false },
    meta: {
      requiresAuth: true
    }
  },

 

  {
    path: "/",
    component: BrowsePage,
    name: "Home",
    props: { isHeader: false },
  },

  {
    path: "/browse/replay",
    component: ReplayPage,
    name: "Programmes",
    props: { isHeader: true },
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/direct/:id",
    component: DirectPage,
    name: "Direct",
    props: { isHeader: true },
    meta: {
      requiresAuth: true
    }
  },

  // {
  //   path: "/direct/14",
  //   component: DirectPage,
  //   name: "Direct",
  //   props: { isHeader: true },
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  
  {
    path: "/browse/stream",
    component: BrowsePage,
    name: "Stream",
    props: { isHeader: true },
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/user/compte",
    component: UserProfilePage,
    name: "UserProfile",
    props: { isHeader: false },
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/search",
    component: SearchPage,
    name: "Search",
    props: { isHeader: false },
    meta: {
      requiresAuth: true
    }
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, __, savedPosition) {
    if (to.query.scrollTop) {
      return { left: 0, top: to.query.scrollTop };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;

