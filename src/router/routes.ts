import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/passercommande',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CommandeProduitsView.vue') },
    ],
  },
  {
    path: '/panier',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/panierView.vue') }],
  },
  {
    path: '/commande',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CommandeView.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
