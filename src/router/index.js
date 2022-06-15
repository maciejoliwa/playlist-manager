import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ClientView from '../views/ClientView.vue';
import TracksView from '../views/TracksView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tracks',
    name: 'tracks',
    component: TracksView
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
