import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-7f0c5179","/%E4%BF%A1%E4%BB%B0/%E4%BF%A1%E5%BF%83.html",{"title":"信心"},["/信仰/信心.html","/%E4%BF%A1%E4%BB%B0/%E4%BF%A1%E5%BF%83","/信仰/信心.md","/%E4%BF%A1%E4%BB%B0/%E4%BF%A1%E5%BF%83.md"]],
  ["v-d532b046","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%BB%8F.html",{"title":"圣经"},["/信仰/圣经.html","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%BB%8F","/信仰/圣经.md","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%BB%8F.md"]],
  ["v-54bc51ca","/%E4%BF%A1%E4%BB%B0/%E6%82%94%E6%94%B9.html",{"title":"悔改"},["/信仰/悔改.html","/%E4%BF%A1%E4%BB%B0/%E6%82%94%E6%94%B9","/信仰/悔改.md","/%E4%BF%A1%E4%BB%B0/%E6%82%94%E6%94%B9.md"]],
  ["v-1f97ba87","/%E4%BF%A1%E4%BB%B0/%E7%88%B1.html",{"title":"爱"},["/信仰/爱.html","/%E4%BF%A1%E4%BB%B0/%E7%88%B1","/信仰/爱.md","/%E4%BF%A1%E4%BB%B0/%E7%88%B1.md"]],
  ["v-3f683ebe","/%E4%BF%A1%E4%BB%B0/%E7%A5%9E.html",{"title":"对神的认识"},["/信仰/神.html","/%E4%BF%A1%E4%BB%B0/%E7%A5%9E","/信仰/神.md","/%E4%BF%A1%E4%BB%B0/%E7%A5%9E.md"]],
  ["v-cfc4f690","/%E4%BF%A1%E4%BB%B0/%E7%A6%8F%E9%9F%B3.html",{"title":"福音"},["/信仰/福音.html","/%E4%BF%A1%E4%BB%B0/%E7%A6%8F%E9%9F%B3","/信仰/福音.md","/%E4%BF%A1%E4%BB%B0/%E7%A6%8F%E9%9F%B3.md"]],
  ["v-5c3f8208","/%E7%94%9F%E6%B4%BB/%E4%BA%BA%E7%94%9F%E4%B8%80%E5%AE%9A%E4%BC%9A%E7%BB%8F%E5%8E%86%E7%9A%84%E4%BA%8B.html",{"title":"人生一定会经历的事"},["/生活/人生一定会经历的事.html","/%E7%94%9F%E6%B4%BB/%E4%BA%BA%E7%94%9F%E4%B8%80%E5%AE%9A%E4%BC%9A%E7%BB%8F%E5%8E%86%E7%9A%84%E4%BA%8B","/生活/人生一定会经历的事.md","/%E7%94%9F%E6%B4%BB/%E4%BA%BA%E7%94%9F%E4%B8%80%E5%AE%9A%E4%BC%9A%E7%BB%8F%E5%8E%86%E7%9A%84%E4%BA%8B.md"]],
  ["v-665712be","/%E7%94%9F%E6%B4%BB/%E6%9C%AA%E6%9D%A5%E4%B8%8D%E5%8F%AF%E7%9F%A5%EF%BC%8C%E6%88%96%E6%98%AF%E6%9C%AA%E6%9D%A5%E5%A6%82%E6%98%A8%E6%97%A5%EF%BC%9F.html",{"title":"未来不可知，或是未来如昨日？"},["/生活/未来不可知，或是未来如昨日？.html","/%E7%94%9F%E6%B4%BB/%E6%9C%AA%E6%9D%A5%E4%B8%8D%E5%8F%AF%E7%9F%A5%EF%BC%8C%E6%88%96%E6%98%AF%E6%9C%AA%E6%9D%A5%E5%A6%82%E6%98%A8%E6%97%A5%EF%BC%9F","/生活/未来不可知，或是未来如昨日？.md","/%E7%94%9F%E6%B4%BB/%E6%9C%AA%E6%9D%A5%E4%B8%8D%E5%8F%AF%E7%9F%A5%EF%BC%8C%E6%88%96%E6%98%AF%E6%9C%AA%E6%9D%A5%E5%A6%82%E6%98%A8%E6%97%A5%EF%BC%9F.md"]],
  ["v-104da2f2","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E5%9B%9B%E7%A7%8D%E7%88%B1%E3%80%8B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0.html",{"title":"《四种爱》读书笔记"},["/读书笔记/《四种爱》读书笔记.html","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E5%9B%9B%E7%A7%8D%E7%88%B1%E3%80%8B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0","/读书笔记/《四种爱》读书笔记.md","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E5%9B%9B%E7%A7%8D%E7%88%B1%E3%80%8B%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0.md"]],
  ["v-4297d580","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E6%95%AC%E8%99%94%E7%9A%84%E5%A5%A5%E7%A7%98%E3%80%8B%E6%A6%82%E8%A6%81%E6%80%BB%E7%BB%93.html",{"title":"《敬虔的奥秘》概要总结"},["/读书笔记/《敬虔的奥秘》概要总结.html","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E6%95%AC%E8%99%94%E7%9A%84%E5%A5%A5%E7%A7%98%E3%80%8B%E6%A6%82%E8%A6%81%E6%80%BB%E7%BB%93","/读书笔记/《敬虔的奥秘》概要总结.md","/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/%E3%80%8A%E6%95%AC%E8%99%94%E7%9A%84%E5%A5%A5%E7%A7%98%E3%80%8B%E6%A6%82%E8%A6%81%E6%80%BB%E7%BB%93.md"]],
  ["v-18fa03a1","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E5%B7%A5%E4%BD%9C.html",{"title":"圣灵的工作"},["/信仰/圣灵/圣灵的工作.html","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E5%B7%A5%E4%BD%9C","/信仰/圣灵/圣灵的工作.md","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E5%B7%A5%E4%BD%9C.md"]],
  ["v-7afce814","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E6%9E%9C%E5%AD%90.html",{"title":"圣灵的果子"},["/信仰/圣灵/圣灵的果子.html","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E6%9E%9C%E5%AD%90","/信仰/圣灵/圣灵的果子.md","/%E4%BF%A1%E4%BB%B0/%E5%9C%A3%E7%81%B5/%E5%9C%A3%E7%81%B5%E7%9A%84%E6%9E%9C%E5%AD%90.md"]],
  ["v-9a34e0b4","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E5%86%B2%E5%8A%A8.html",{"title":"恋爱的冲动"},["/生活/恋爱/恋爱的冲动.html","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E5%86%B2%E5%8A%A8","/生活/恋爱/恋爱的冲动.md","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E5%86%B2%E5%8A%A8.md"]],
  ["v-740b5068","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E8%B5%B7%E7%82%B9.html",{"title":"恋爱的起点"},["/生活/恋爱/恋爱的起点.html","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E8%B5%B7%E7%82%B9","/生活/恋爱/恋爱的起点.md","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E6%81%8B%E7%88%B1%E7%9A%84%E8%B5%B7%E7%82%B9.md"]],
  ["v-798c023a","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E7%99%BE%E9%97%AE%E7%99%BE%E9%97%AE%EF%BC%8C%E7%BB%9D%E4%B8%8D%E7%99%BD%E9%97%AE.html",{"title":"百问百问，绝不白问"},["/生活/恋爱/百问百问，绝不白问.html","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E7%99%BE%E9%97%AE%E7%99%BE%E9%97%AE%EF%BC%8C%E7%BB%9D%E4%B8%8D%E7%99%BD%E9%97%AE","/生活/恋爱/百问百问，绝不白问.md","/%E7%94%9F%E6%B4%BB/%E6%81%8B%E7%88%B1/%E7%99%BE%E9%97%AE%E7%99%BE%E9%97%AE%EF%BC%8C%E7%BB%9D%E4%B8%8D%E7%99%BD%E9%97%AE.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-3279cf61","/aurora-archive/",{"title":""},["/aurora-archive/index.html"]],
  ["v-40c17455","/%E4%B8%80%E7%A7%8D%E5%A5%87%E6%80%AA%E7%9A%84%E5%88%86%E4%BA%AB%E6%AC%B2.html",{"title":"一种奇怪的分享欲"},["/一种奇怪的分享欲.html","/%E4%B8%80%E7%A7%8D%E5%A5%87%E6%80%AA%E7%9A%84%E5%88%86%E4%BA%AB%E6%AC%B2","/一种奇怪的分享欲.md","/%E4%B8%80%E7%A7%8D%E5%A5%87%E6%80%AA%E7%9A%84%E5%88%86%E4%BA%AB%E6%AC%B2.md"]],
  ["v-2f915242","/timeline.html",{"title":""},["/timeline","/timeline.md"]],
  ["v-8daa1a0e","/",{"title":"THOUGHT & NEW VIEW"},["/index.html","/README.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
