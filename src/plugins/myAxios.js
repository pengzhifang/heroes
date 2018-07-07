import axios from 'axios';
const MyAxios = {};
MyAxios.install = function (Vue) {
   Vue.prototype.$http = axios;
   axios.defaults.baseURL = 'http://localhost:3000/';
}

export default MyAxios;