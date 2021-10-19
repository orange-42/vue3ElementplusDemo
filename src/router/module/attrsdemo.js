const attrsRouter = [
  {
    name: 'attrsDemo',
    path: '/attrsDemo',
    meta: {
        title: 'attrs示例'
    },
    component: () => import('../../components/attrsComponents/father.vue')
  }
]
export default attrsRouter