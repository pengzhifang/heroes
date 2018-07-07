import Vue from 'vue';
import App from './App.vue';

import router from './routes/router'

//导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import axios from 'axios';

Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
