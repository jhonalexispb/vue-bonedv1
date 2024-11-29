const MainRoutes = {
  path: '/sistema',
  meta: {
    requiresAuth: true
  },
  redirect: '/sistema/dashboard/',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'Starter',
      path: 'dashboard',
      component: () => import('@/views/StarterPage.vue')
    },
    {
      name: 'LineasFarmaceuticas',
      path: 'lineasFarmaceuticas',
      component: () => import('@/views/Apps/LineasFarmaceuticas.vue')
    }
  ]
};

export default MainRoutes;
