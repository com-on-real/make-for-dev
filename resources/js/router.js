import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/home.vue';
import Space from './components/space.vue';

import Login from './components/auth/login.vue';
import Register from './components/auth/register.vue';

const routes = [{
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/space',
        name: 'space',
        component: Space
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]


export default new VueRouter({
    history: true,
    mode: 'history',
    routes
})