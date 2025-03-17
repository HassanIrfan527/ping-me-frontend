import { createRouter, createWebHistory } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';

const routes = [
    {
        path: '/',
        component: GuestLayout,
        children: [
            { path: '', name: 'Home', component: Home, meta: { title: 'Home' }, },
            { path: 'about', name: 'About', component: About, meta: { title: 'About PingMe' }, }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFound
    },
    {
        path: '/register',
        meta: {title: 'Register | PingMe'},
        component: Register
    },
    {
        path: '/login',
        meta: {title: 'Login | PingMe'},
        component: Login
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    next();
});

export default router;
