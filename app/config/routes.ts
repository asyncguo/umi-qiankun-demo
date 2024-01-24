const routes = [
  {
    path: '/',
    flatMenu: true,
    component: '@/layouts/BaseLayout',
    routes: [
      {
        path: '/',
        redirect: '/list'
      },
      {
        name: '列表',
        path: '/list',
        routes: [
          {
            name: '列表1',
            path: 'table',
            component: '@/pages/Table'
          }
        ]
      },
      {
        name: '文档',
        path: '/docs',
        routes: [
          {
            name: '文档1',
            path: 'docs-demo',
            component: '@/pages/docs'
          }
        ]
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
