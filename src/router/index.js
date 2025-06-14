import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Educacao from '../components/Educacao.vue'
import Mapa from '../components/Mapa.vue'
import Denuncia from '../components/Denuncia.vue'
import Gamificacao from '../components/Gamificacao.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/educacao', component: Educacao },
  { path: '/mapa', component: Mapa },
  { path: '/denuncia', component: Denuncia },
  { path: '/gamificacao', component: Gamificacao }
]

export default createRouter({
  history: createWebHistory(),
  routes
})