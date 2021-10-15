const indexRouter = [{
    name: 'index',
    path: '/index',
    meta: {
        title: '首页'
    },
    component: () => import('../../views/welcome/index.vue')
  }]
export default indexRouter