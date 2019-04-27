module.exports = {
    title: 'Galaxy of Drones Online',
    description: 'An open source multiplayer space strategy game.',
    themeConfig: {
        docsDir: 'docs',
        docsRepo: 'galaxyofdrones/docs',
        editLinks: true,
        repo: 'galaxyofdrones/galaxyofdrones',
        
        nav: [
            { text: 'Gamer Guide', link: '/gamer-guide/' },
            { text: 'Developer Guide', link: '/developer-guide/' }
        ],

        sidebar: {
            '/gamer-guide/': [
                ''
            ],

            '/developer-guide/': [
                ''
            ]
        }
    }
};
