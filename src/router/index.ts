import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import createRouteGuard from "@/router/guard";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/category',
        name: 'Category',
        meta: {
            title: '分类',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/category/index.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        meta: {
            title: '购物车',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/cart/index.vue')
    },
    {
        path: '/my',
        name: 'My',
        meta: {
            title: '我的',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/my/index.vue')
    },
    {
        path: '/search',
        name: 'Search',
        meta: {
            title: '搜索',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/search/index.vue')
    },
    {
        path: '/product',
        name: 'Product',
        meta: {
            title: '商品',
            keepAlive: true,
            requireAuth: false
        },
        children: [
            {
                path: 'detail/:skuId',
                name: 'ProductDetail',
                meta: {
                    title: '商品详情页',
                    keepAlive: true,
                    requireAuth: false
                },
                component: () => import('@/views/product/detail/index.vue')
            },
        ]
    },
    {
        path: '/order',
        name: 'Order',
        meta: {
            title: '订单',
            keepAlive: true,
            requireAuth: false
        },
        children: [
            {
                path: 'submit',
                name: 'OrderSubmit',
                meta: {
                    title: '订单提交',
                    keepAlive: true,
                    requireAuth: false
                },
                component: () => import('@/views/order/submit/index.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

createRouteGuard(router);
export default router;