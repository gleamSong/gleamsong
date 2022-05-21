import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/songjg/文档/blog/LiveBlog/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/songjg/文档/blog/LiveBlog/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
