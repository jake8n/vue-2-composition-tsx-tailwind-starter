import Vue, { CreateElement } from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App";
import "tailwindcss/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  render: (h: CreateElement) => h(App),
}).$mount("body");
