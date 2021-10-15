import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import index from '../views/layout/index.vue'
import tableDemo from '../views/tableDemo/index.vue'
import formDemo from '../views/formDemo/index.vue'
import setupScript from '../views/setupScript/index.vue'
import indexRouter from './module/index'
import formRouter from './module/form'
import mixinsRouter from './module/mixins'
import setupRouter from './module/setupWay'
import tableRouter from './module/table'

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: index,
        redirect: '/index',
        children: [
            ...indexRouter,
            ...formRouter,
            ...mixinsRouter,
            ...setupRouter,
            ...tableRouter
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router