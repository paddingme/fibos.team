import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import VueContentPlaceholders from "vue-content-placeholders";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueContentPlaceholders);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
