import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "./styles/site.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import SocialSharing from "vue-social-sharing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebook, faLinkedin);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(SocialSharing);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
