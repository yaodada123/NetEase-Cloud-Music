import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

const Remmend = () => import("@/components/content/remmend/Remmend.vue");
const HotSong = () => import("@/components/content/hotsong/HotSong.vue");
const Search = () => import("@/components/content/search/Search.vue");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotsong',
    name: 'HotSong',
    component: HotSong
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
