module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'prueba', link: '/prueba/' },
      { text: 'bar', link: '/bar/' },
      { text: 'foo', link: '/foo/' },
      {
        text: 'Idiomas',
        ariaLabel: 'Menú de idiomas',
        items: [
          { text: 'español', link: '/language/español/' },
          { text: 'ingles', link: '/language/ingles/' }
        ]
      }
    ],
    sidebar: {
      '/prueba/': [
        '',
        'prueba',
        '/bar/'
      ],
      '/bar/': [
        '',
        'one',
        'two'
      ],
      '/foo/': [
        '',
        'three',
        'four'
      ]
    }
  }
}