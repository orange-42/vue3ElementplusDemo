const tableRouter = [
  {
    name: 'tableDemo',
    path: '/tableDemo',
    meta: {
        title: '表格组件'
    },
    component: () => import('../../views/tableDemo/index.vue')
  }
]
export default tableRouter