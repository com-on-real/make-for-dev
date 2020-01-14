require('./bootstrap');
import 'es6-promise/auto';

import Vue from 'vue';
window.Vue = Vue;
import VueRouter from 'vue-router';
import router from './router';
Vue.use(VueRouter);

Vue.component('Home', require('./components/home'));
Vue.component('Space', require('./components/space'));

Vue.component('Login', require('./components/auth/login'));
Vue.component('Register', require('./components/auth/register'));


const app = new Vue({
    el: '#app',
    router
});