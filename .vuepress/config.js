module.exports = {
  title: '递归之路',
  description: '',
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ],
    [
      "vuepress-plugin-auto-sidebar",
      {
        sort: {
          mode: "asc",
          readmeFirst: true,
          readmeFirstForce: false
        },
        title: {
          mode: "titlecase",
          map: {}
        },
        sidebarDepth: 10,
        collapse: {
          open: false,
          collapseList: [],
          uncollapseList: []
        },
        ignore: [],
        removeEmptyGroup: false,
        git: {
          trackStatus: 'all'
        }
      }
    ],
    ['feed',
      {
        canonical_base: 'http://snailrend.github.io',
      }
    ],
	 ['archive',
            {
                //需要排除的页面url，在该数组里面的路径，都不会被统计
                excludes: ['/footer.html','/404.html','/about/','/mood/','/link/','/tag/','/photo/'],
                //当某篇文章没有标题时，将使用下面值进行替换
                noTitle: '暂时没有标题配置'
            }]
  ],
  themeConfig: {
    lastUpdated: '更新于',
    sidebar: 'auto',
    displayAllHeaders: false,
    smoothScroll: true
  },
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性
      lang: 'zh-CN',
    }
  },
}
