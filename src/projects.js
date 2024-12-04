const projects = [
    {
        id: 1,
        type: 'video',
        title: "Black Friday - Alienware",
        image: require('./assets/videos/alienware-bf-2024/thumb.jpg'),
        video: require('./assets/videos/alienware-bf-2024/video.mp4'),
        details: [
            require('./assets/videos/alienware-bf-2024/detail1.jpg'),
            require('./assets/videos/alienware-bf-2024/detail2.jpg'),
            require('./assets/videos/alienware-bf-2024/detail3.jpg'),
            require('./assets/videos/alienware-bf-2024/detail4.jpg'),
            require('./assets/videos/alienware-bf-2024/detail5.jpg')
        ],
        description: "The 'Marble Elegance' project is a captivating introduction to the Motorola Edge 50.",
        tags: "Video, Animation, Motion Graphics"
    },
    {
        id: 2,
        type: 'video',
        title: "Ofertas todo dia - Dell",
        image: require('./assets/videos/dell-ofertas-todo-dia-q2-w1/thumb.jpg'),
        video: require('./assets/videos/dell-ofertas-todo-dia-q2-w1/video.mp4'),
        details: [
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail1.jpg'),
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail2.jpg'),
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail3.jpg'),
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail4.jpg'),
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail5.jpg'),
            require('./assets/videos/dell-ofertas-todo-dia-q2-w1/detail6.jpg')
        ],
        description: "The 'Marble Elegance' project is a captivating introduction to the Motorola Edge 50.",
        tags: "Video, Animation, Motion Graphics"
    },
    {
        id: 3,
        type: 'video',
        title: "Black Friday - Dell",
        image: require('./assets/videos/dell-bf-2024/thumb.jpg'),
        video: require('./assets/videos/dell-bf-2024/video.mp4'),
        details: [
            require('./assets/videos/dell-bf-2024/detail2.jpg'),
            require('./assets/videos/dell-bf-2024/detail3.jpg'),
            require('./assets/videos/dell-bf-2024/detail4.jpg'),
            require('./assets/videos/dell-bf-2024/detail5.jpg'),
            require('./assets/videos/dell-bf-2024/detail6.jpg'),
            require('./assets/videos/dell-bf-2024/detail7.jpg')
        ],
        description: "The 'Marble Elegance' project is a captivating introduction to the Motorola Edge 50.",
        tags: "Video, Animation, Motion Graphics"
    },
    {
        id: 4,
        type: 'banner',
        title: "Esquenta Black Friday - Alienware",
        image: require('./assets/code/alienware-esquenta-bf-2024/thumb.jpg'),
        code: '/assets/code/alienware-esquenta-bf-2024/detail/2088426-index.html',
        details: [
            { src: '/assets/code/alienware-esquenta-bf-2024/250x250/2088426-index.html', width: '250px', height: '250px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/300x250/2088426-index.html', width: '300px', height: '250px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/336x280/2088426-index.html', width: '336px', height: '280px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/160x600/2088426-index.html', width: '160px', height: '600px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/300x600/2088426-index.html', width: '300px', height: '600px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/320x50/2088426-index.html', width: '320px', height: '50px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/320x100/2088426-index.html', width: '320px', height: '100px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/728x90/2088426-index.html', width: '728px', height: '90px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/970x90/2088426-index.html', width: '970px', height: '90px' },
            { src: '/assets/code/alienware-esquenta-bf-2024/970x250/2088426-index.html', width: '970px', height: '250px' },
        ],
        description: "A series of animated banners for Alienware's Black Friday campaign.",
        tags: "HTML, CSS, JavaScript, Banner, Animation"
    },
    {
        id: 5,
        type: 'banner',
        title: "Tecnologia Essencial - Dell",
        image: require('./assets/code/dell-tecnologia-essencial-2024/thumb.jpg'),
        code: '/assets/code/dell-tecnologia-essencial-2024/detail/716153-index.html',
        details: [
            { src: '/assets/code/dell-tecnologia-essencial-2024/250x250/716153-index.html', width: '250px', height: '250px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/300x250/716153-index.html', width: '300px', height: '250px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/336x280/716153-index.html', width: '336px', height: '280px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/160x600/716153-index.html', width: '160px', height: '600px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/300x600/716153-index.html', width: '300px', height: '600px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/320x50/716153-index.html', width: '320px', height: '50px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/320x100/716153-index.html', width: '320px', height: '100px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/728x90/716153-index.html', width: '728px', height: '90px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/970x90/716153-index.html', width: '970px', height: '90px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/970x250/716153-index.html', width: '970px', height: '250px' },
        ],
        description: "A series of animated banners for Alienware's Black Friday campaign.",
        tags: "HTML, CSS, JavaScript, Banner, Animation"
    },
    {
        id: 6,
        type: 'carrossel',
        title: "Carrossel Collection - Q4 2024",
        image: require('./assets/carrossel/dell-carrossel-q4fy2025/thumb.jpg'),
        code: '/assets/code/dell-tecnologia-essencial-2024/detail/716153-index.html',
        details: [
            { src: '/assets/code/dell-tecnologia-essencial-2024/250x250/716153-index.html', width: '250px', height: '250px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/300x250/716153-index.html', width: '300px', height: '250px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/336x280/716153-index.html', width: '336px', height: '280px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/160x600/716153-index.html', width: '160px', height: '600px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/300x600/716153-index.html', width: '300px', height: '600px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/320x50/716153-index.html', width: '320px', height: '50px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/320x100/716153-index.html', width: '320px', height: '100px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/728x90/716153-index.html', width: '728px', height: '90px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/970x90/716153-index.html', width: '970px', height: '90px' },
            { src: '/assets/code/dell-tecnologia-essencial-2024/970x250/716153-index.html', width: '970px', height: '250px' },
        ],
        description: "A series of animated banners for Alienware's Black Friday campaign.",
        tags: "HTML, CSS, JavaScript, Banner, Animation"
    },
    // Adicione mais projetos aqui
];

export default projects;