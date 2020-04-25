import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDesktop,
  faQuoteLeft,
  faUser,
  faBars,
  faEnvelope,
  faUsersCog,
  faPeopleCarry,
  faFolderPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faDesktop,
  faQuoteLeft,
  faUser,
  faBars,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faEnvelope,
  faUsersCog,
  faPeopleCarry,
  faFolderPlus
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// eslint-disable-next-line
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const VueAxe = require('vue-axe');
  Vue.use(VueAxe, {
    customResultHandler: (error, results) => {
      results.violations.forEach(violation => console.log(violation));
    }
    // ...
  });
}

new Vue({
  render: h => h(App)
}).$mount('#app');
