const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Landingpage',
      path: '/',
      component: () => import('@/views/StarterPage.vue')
    },
    {
      name: 'Login',
      path: '/auth/login1',
      component: () => import('@/views/authentication/auth1/LoginPage1.vue')
    },
    {
      name: 'Register',
      path: '/auth/register1',
      component: () => import('@/views/authentication/auth1/RegisterPage1.vue')
    },
    {
      name: 'Forgot Password',
      path: '/auth/forgot-pwd1',
      component: () => import('@/views/authentication/auth1/ForgotPwd1.vue')
    },
    {
      name: 'Check Mail',
      path: '/auth/check-mail1',
      component: () => import('@/views/authentication/auth1/CheckMail1.vue')
    },
    {
      name: 'Reset Password',
      path: '/auth/reset-pwd1',
      component: () => import('@/views/authentication/auth1/ResetPwd1.vue')
    },
    {
      name: 'Code Verification',
      path: '/auth/code-verify1',
      component: () => import('@/views/authentication/auth1/CodeVerification1.vue')
    },
    {
      name: 'Coming Soon 1',
      path: '/pages/comingsoon1',
      component: () => import('@/views/pages/maintenance/comingsoon/Comingsoon1.vue')
    },
    {
      name: 'Coming Soon 2',
      path: '/pages/comingsoon2',
      component: () => import('@/views/pages/maintenance/comingsoon/Comingsoon2.vue')
    },
    {
      name: 'Under Construction 1',
      path: '/pages/construction1',
      component: () => import('@/views/pages/underconstruction/UnderConstruction1.vue')
    },
    {
      name: 'Under Construction 2',
      path: '/pages/construction2',
      component: () => import('@/views/pages/underconstruction/UnderConstruction2.vue')
    },
    {
      name: 'Error 404',
      path: '/pages/error',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    }
  ]
};

export default AuthRoutes;
