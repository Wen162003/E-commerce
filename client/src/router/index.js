import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Importamos lo que tiene sistema de rutas
import login from "../views/login.vue"
import register from "../views/register.vue"
import category from "../views/category.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // Define la URL
    path: '/login',
    // Nombre unico de la ruta
    name: 'login',
    // especfica el componente vue que debe renderizarse 
    component: login
  },
  {
    path: '/register',
    name:'register',
    component: register
  },
  {
    // No funciona pq no me salen las cateogiras ;( =c 
    path: '/:category',
    component: category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
