import Vue from 'vue';
import App from './App';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// // import router from './router';
// // import store from './store/index';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
Vue.use(Vuetify);

Vue.config.productionTip = false;


// https://webformyself.com/sozdanie-prilozhenij-vuejs-s-typescript/
new Vue({
//   // router,
//   // store,
  render: (h) => h(App),
}).$mount('#app');
