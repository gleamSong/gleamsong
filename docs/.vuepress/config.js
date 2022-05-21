const {defaultTheme} = require('@vuepress/theme-default')
const {archivePlugin} = require('vuepress-plugin-archive')
const {searchPlugin} = require('@vuepress/plugin-search')
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components')

//const autoSidebarPlugin = require('vuepress-plugin-auto-sidebar')

// console.log(typeof autoSidebarPlugin)
// console.log(autoSidebarPlugin)

module.exports = {
  title: '递归之路',
  description: '',
  plugins: [
    // autoSidebarPlugin({
    // sort: {
    // mode: "asc",
    // readmeFirst: true,
    // readmeFirstForce: false
    // },
    // title: {
    // mode: "titlecase",
    // map: {}
    // },
    // sidebarDepth: 10,
    // collapse: {
    // open: false,
    // collapseList: [],
    // uncollapseList: []
    // },
    // ignore: [],
    // removeEmptyGroup: false,
    // git: {
    // trackStatus: 'all'
    // }
    // }),
    registerComponentsPlugin({
                               componentsDir: path.resolve(__dirname, './components')
                             }),
    searchPlugin({
                   locales: {
                     '/': {
                       placeholder: '搜索',
                     },
                     '/zh/': {
                       placeholder: '搜索',
                     },
                   },
                 }),
    archivePlugin({
                    //需要排除的页面url，在该数组里面的路径，都不会被统计
                    excludes: ['/', '/aurora-archive'],
                    //当某篇文章没有标题时，将使用下面值进行替换
                    noTitle: '暂时没有标题配置'
                  }),
    {
      name: 'savePageData',
      onPrepared: async (app) => {
        const pageData = app.pages.map((page) => {
          return page;
        });
        await app.writeTemp(
          "page-data.js",
          `export default ${JSON.stringify(pageData)}`
        );
      }

    }
  ],
  theme: defaultTheme({
    lastUpdatedText: '更新于',
    sidebar: 'auto',
    contributors:false,
    displayAllHeaders: false,
    smoothScroll: true,
    search:true,
    locales: {
      '/': {
        // 将会被设置为 <html> 的 lang 属性
        lang: 'zh-CN',
      }
    }
  }),
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性
      lang: 'zh-CN',
    }
  },
}
