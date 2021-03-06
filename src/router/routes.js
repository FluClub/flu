
export default [
  {
    path: '/', redirect: '/splash'
  },
  {
    path: '/splash',
    component: () => import('pages/splash')
  },
  {
    path: '/dashboard', redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/wallet',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/wallet') },
      { path: 'account/:address', component: () => import('pages/account') }
    ]
  },
  {
    path: '/transfer',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/transfer') },
      { path: 'account/:address', component: () => import('pages/transfer') }
    ]
  },
  {
    path: '/movie',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/movie') },
      { path: 'view/:hash', component: () => import('pages/movie-view') }
    ]
  },
  {
    path: '/contract',
    component: () => import('layouts/default'),
    children: [
      { path: 'deploy', component: () => import('pages/contract-deploy') },
      { path: 'my', component: () => import('pages/contract-my') },
      { path: 'my/add', component: () => import('pages/contract-add') },
      { path: 'my/view', component: () => import('pages/contract-view') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
