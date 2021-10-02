const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/GamesList.vue')
            },
            {
                path: '/authorization',
                component: () =>
                    import ('pages/Authorization.vue')
            },
            {
                path: '/create_game',
                component: () =>
                    import ('pages/CreateGame.vue')
            },
            {
                path: '/join_game',
                component: () =>
                    import ('pages/JoinGame.vue')
            }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes