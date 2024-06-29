import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue'),
    children: [
      {
        path: '/Movies',
        name: 'Movies',
        component: () => import('@/views/Movies/Main.vue'),
      },
      {
        path: '/addMovie',
        name: 'addMovie',
        component: () => import('@/views/Movies/addMovie'),
      },
      {
        path: '/Actors',
        name: 'Actors',
        component: () => import('@/views/Actors/Main.vue'),
      },
      {
        path: '/addActor',
        name: 'addActor',
        component: () => import('@/views/Actors/AddActor'),
      },
      {
        path: 'editActor/:id',
        name: 'editActor',
        component: () => import( '@/views/Actors/AddActor.vue'),
        meta:
          { requiresAuth:true},
      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
