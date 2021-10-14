import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import index from '../views/index/index.vue'
import tableDemo from '../views/tableDemo/index.vue'
import formDemo from '../views/formDemo/index.vue'

const routes = [
    {
        name: 'index',
        path: '/',
        meta: {
            title: '首页'
        },
        component: index,
        redirect: '/index',
        children: [
            {
                name: 'index',
                path: '/index',
                meta: {
                    title: '欢迎体验Vue3全栈课程'
                },
                component: () => import('../views/welcome/index.vue')
            }
        ]
    },
    {
        name: 'tableDemo',
        path: '/',
        meta: {
            title: '表格示例'
        },
        component: index,
        redirect: '/tableDemo',
        children: [
            {
                name: 'tableDemo',
                path: '/tableDemo',
                meta: {
                    title: '欢迎体验Vue3全栈课程'
                },
                component: () => import('../views/tableDemo/index.vue')
            }
        ]
    },
    {
        name: 'HelloWorld',
        path: '/HelloWorld',
        meta: {
            title: 'mixins示例'
        },
        component: index,
        redirect: '/HelloWorld',
        children: [
            {
                name: 'HelloWorld',
                path: '/HelloWorld',
                meta: {
                    title: '欢迎体验Vue3全栈课程'
                },
                component: () => import('../components/HelloWorld.vue')
            }
        ]
    },
    {
        name: 'formDemo',
        path: '/formDemo',
        meta: {
            title: 'form表单示例'
        },
        component: index,
        redirect: '/formDemo',
        children: [
            {
                name: 'formDemo',
                path: '/formDemo',
                meta: {
                    title: 'form表单'
                },
                component: () => import('../views/formDemo/index.vue')
            }
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router