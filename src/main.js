import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// boostrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// components
import AppMain from './components/AppMain.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            component: AppMain,
            children: [
                {
                    path: '',
                    name: 'home',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppHome.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/anime',
                    name: 'anime',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppCategoryAnime.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/game',
                    name: 'game',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppCategoryGame.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/about',
                    name: 'about',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppAbout.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/contact',
                    name: 'contact',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppContact.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/disclaimer',
                    name: 'disclaimer',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppDisclaimer.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/privacy-policy',
                    name: 'privacy',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppPrivacy.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    }
                },
                {
                    path: '/:slug',
                    name: 'post',
                    sensitive: true,
                    components: {
                        default: () => import('./components/AppPost.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'), 
                    },
                },
                {
                    path: '/:notfound*',
                    name: 'notfound',
                    components: {
                        default: () => import('./components/AppNotFound.vue'),
                        navbar: () => import('./components/AppNavbar.vue'),
                        footer: () => import('./components/AppFooter.vue'),
                    }
                }
            ]
        },
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth', top: -200 });
    }
});

createApp(App)
    .use(router)
    .use(createHead())
    .mount('#app')
