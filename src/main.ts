import Vue from 'vue';
import App from './App';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// // import router from './router';
// // import store from './store/index';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

Vue.config.productionTip = false;


// https://webformyself.com/sozdanie-prilozhenij-vuejs-s-typescript/
new Vue({
//   // router,
//   // store,
  render: (h) => h(App),
}).$mount('#app');
