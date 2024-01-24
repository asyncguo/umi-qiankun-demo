const routes = [
  {
    path: '/',
    flatMenu: true,
    component: '@/layouts/BaseLayout',
    routes: [
      {
        path: '/',
      },
      {
        path: '/app1/*',
        name: 'APP1',
        microApp: 'app1'
      },
      {
        path: '/app2/*',
        name: 'APP2',
        microApp: 'app2'
      },
      {
        path: '/*',
        component: '@/pages/404',
      }
    ],
  },
  {
    path: '/*',
    component: '@/pages/404',
  }
]

export default routes
