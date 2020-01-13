import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/home.vue';
import Space from './components/space.vue';

const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/space',
        name: 'space',
        component: Space
    }
]


export default new VueRouter({
    history: true,
    mode: 'history',
    routes
})