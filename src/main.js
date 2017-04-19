// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';

import '@/scss/comm.scss';
import 'mint-ui/lib/style.css';

import MintUI from 'mint-ui';
Vue.use(MintUI);

import JUI from './j-ui';
Vue.use(JUI);

import App from './App.vue';

// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});