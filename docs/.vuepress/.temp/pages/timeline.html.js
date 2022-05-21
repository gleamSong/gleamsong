export const data = {
  "key": "v-2f915242",
  "path": "/timeline.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "AuroraArchive"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1651980427000,
    "contributors": [
      {
        "name": "songjg",
        "email": "toblessong@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "timeline.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
