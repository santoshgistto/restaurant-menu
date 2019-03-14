import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'

import FirstStep from '@/components/FirstStep'
import ChooseTemplate from '@/components/ChooseTemplate'

import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Setting from '@/components/Setting'
import Builder from '@/components/Builder'
import { auth } from './../firebase';
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '/first',
            name: 'FirstStep',
            component: FirstStep
        },
        {
            path: '/choose',
            name: 'ChooseTemplate',
            component: ChooseTemplate
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/deploys'
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/builder/:id',
            name: 'Builder',
            component: Builder,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                requiresGuest: true
            }
        }
    ]
})

// Route Guard
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NO logged user
        if (!auth.currentUser) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if  logged user
        if (auth.currentUser) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
