const formRouter = [
  {
    name: 'formDemo',
    path: '/formDemo',
    meta: {
        title: 'form表单'
    },
    component: () => import('../../views/formDemo/index.vue')
  }
]
export default formRouter