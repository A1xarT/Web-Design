import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutApp from '../views/AboutApp.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/homepage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
        props: true
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/aboutapp',
        name: 'AboutApp',
        component: AboutApp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
