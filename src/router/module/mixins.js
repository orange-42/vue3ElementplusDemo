const mixinsRouter = [
  {
    name: 'HelloWorld',
    path: '/HelloWorld',
    meta: {
        title: 'mixins组件'
    },
    component: () => import('../../components/HelloWorld.vue')
  }
]

export default mixinsRouter