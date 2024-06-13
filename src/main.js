import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './pages/HomeView.vue';
import PortfolioView from './pages/PortfolioView.vue';
import ContactView from './pages/ContactView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/portfolio', component: PortfolioView},
        {path: '/contact', component: ContactView},
    ],
})



createApp(App).use(router).mount('#app')
