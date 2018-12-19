import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
// import Index from "./views/Index.vue";
// import Components from "./views/Components.vue";
import Backups from "./views/Backups.vue";
import About from "./views/About.vue";
// import Landing from "./views/Landing.vue";
// import Login from "./views/Login.vue";
// import Register from "./views/Register.vue";
// import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    // {
    //   path: "/components",
    //   name: "components",
    //   components: {
    //     header: AppHeader,
    //     default: Components,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/",
    //   name: "index",
    //   components: {
    //     header: AppHeader,
    //     default: Index,
    //     footer: AppFooter
    //   }
    // },
    {
      path: "/backups",
      name: "backups",
      components: {
        header: AppHeader,
        default: Backups,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "backups",
      components: {
        header: AppHeader,
        default: Backups,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: {
    //     header: AppHeader,
    //     default: Landing,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   components: {
    //     header: AppHeader,
    //     default: Login,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   components: {
    //     header: AppHeader,
    //     default: Register,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: {
    //     header: AppHeader,
    //     default: Profile,
    //     footer: AppFooter
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
