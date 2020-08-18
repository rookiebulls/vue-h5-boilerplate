const routes = [
  {
    path: '/',
    meta: {},
    component: () => import(/* webpackChunkName:"home" */ 'src/views/Home.vue')
  }
]

export default routes
