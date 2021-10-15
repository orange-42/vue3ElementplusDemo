const setupRouter = [
  {
    name: 'setupScript',
    path: '/setupScript',
    meta: {
        title: 'setupScript例子'
    },
    component: () => import('../../views/setupScript/index.vue')
  }
]
export default setupRouter