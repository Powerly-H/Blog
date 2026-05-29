import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Categories from '../views/Categories.vue'
import About from '../views/About.vue'
import Guestbook from '../views/Guestbook.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/article/:id', name: 'ArticleDetail', component: ArticleDetail },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/about', name: 'About', component: About },
  { path: '/guestbook', name: 'Guestbook', component: Guestbook }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
