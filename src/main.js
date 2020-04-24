import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// eslint-disable-next-line
if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line
  const VueAxe = require("vue-axe");
  Vue.use(VueAxe, {
    customResultHandler: (error, results) => {
      results.violations.forEach(violation => console.log(violation));
    }
    // ...
  });
}

new Vue({
  render: h => h(App)
}).$mount("#app");
