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
        {path: '/', name: 'home', component: HomeView},
        {path: '/portfolio', name: 'portfolio', component: PortfolioView},
        {path: '/contact', name: 'contact', component: ContactView},
    ],
})



createApp(App).use(router).mount('#app')
