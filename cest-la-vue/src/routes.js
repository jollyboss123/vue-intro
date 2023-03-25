import HomePage from '@/views/HomePage.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserPage.vue')
    }
]