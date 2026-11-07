import { createRouter, createWebHistory } from 'vue-router'

const rutas = [
  {
    path: '/',
    component: () => import('../layouts/LayoutPrincipal.vue'),
    children: [
      {
        path: '',
        name: 'inicio',
        component: () => import('../vistas/VistaInicio.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'no-encontrada',
    component: () => import('../vistas/VistaNoEncontrada.vue'),
  },
]

const enrutador = createRouter({
  history: createWebHistory(),
  routes: rutas,
})

export default enrutador
