<template>
  <div id="timeline-box" class="timeline-box">
    <div v-for="(item,index) in allYearArr" :key="index" class="timeline-item">
      <div class="timeline-year">
        <span class="timeline-year-title">{{ item }}</span>
      </div>
      <phrase-item v-for="month in getAllMonthArr(item)" :all-page-data-arr="allPageDataArr" :month="month"
                   :page-year="item"></phrase-item>
    </div>
  </div>
</template>

<script>
import pageData from "@temp/pagesData.js";
import PhraseItem from "./PhraseItem.vue"
import moment from "moment";

let excludes = []

export default {
  name: "PhrasePage",
  components: {
    PhraseItem
  },
  data() {
    return {
      allPageDataArr: [],
      allYearArr: []
    }
  },
  created() {
    document.title = decodeURI(this.$route.path).replaceAll('/','-').replaceAll(/(^-)|(-$)/g,'')
                     + ' | ' + document.title
    let newPageArr = []
    let allPageArr = []
    let allYearSet = new Set()
    excludes.push(this.$route.path)
    newPageArr = pageData.filter((pageData) => {
      for (let item of excludes) {
        // console.log('title', pageData.title)
        // console.log('this.$route.path', this.$route.path)
        // console.log('pageData.path', pageData.path)
        // console.log(pageData.path.startsWith(this.$route.path))
        if (!pageData.path.startsWith(item) || pageData.path.replaceAll(/\/$/g, '') === item.replaceAll(/\/$/g, '')) {
          return false;
        }
      }
      let title = pageData.title
      //git commit的时间
      let updatedTime = pageData.data.git.updatedTime
      let slug = pageData.slug;
      let datetime = moment(slug,'YYYY年MM月DD日hh时mm');

      if (pageData.data.frontmatter.date !== undefined) {
        updatedTime = new Date(pageData.data.frontmatter.date).getTime()
      }

      allYearSet.add(datetime.get('year'))
      allPageArr.push({
                        title: title,
                        updatedTime: datetime,
                        path: pageData.path,
                        key: pageData.data.key,
                        year: datetime.get('year'),
                        month: datetime.get('month')+1,
                        time: datetime.format('YYYY年MM月DD日hh时mm分'),
                        day: datetime.get('day'),
                      })
      return true;
    })
      //设置时间
      this.allPageDataArr = allPageArr.sort(this.compare("updatedTime"))
      this.allYearArr = Array.from(allYearSet).sort(this.compareMonth())
  },
  computed: {
    getAllMonthArr() {
      return (item) => {
        let allMonthSet = new Set()
        for (let i = 0; i < this.allPageDataArr.length; i++) {
          if (item === this.allPageDataArr[i].year) {
            allMonthSet.add(this.allPageDataArr[i].month)
          }

          if (i === this.allPageDataArr.length - 1) {
            return Array.from(allMonthSet).sort(this.compareMonth(""))
          }
        }
      }
    }
  },
  methods: {
    compareMonth(updatedTime) {
      return (value1, value2) => {
        if (value2 > value1) {
          return 1;
        } else if (value2 < value1) {
          return -1;
        } else {
          return 0;
        }
      }
    },
    compare(updatedTime) {
      return function (object1, object2) {
        let value1 = object1.updatedTime;
        let value2 = object2.updatedTime;
        if (value2 > value1) {
          return 1;
        } else if (value2 < value1) {
          return -1;
        } else {
          return 0;
        }
      }
    },
    getLocalTime(time, isYear, isMonth, isDay) {
      if (time === undefined) {
        //没有时间戳
        return ''
      }

      if (time === 0) {
        //没有时间戳
        return ''
      }

      let date = new Date(time);
      let day = date.getDate()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let hours = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSeconds()
      if (isYear) {
        return year
      }
      if (isMonth) {
        return month
      }
      if (isDay) {
        return day
      }
      return year + "-" + month + "-" + day + " "
    },
  }
}
</script>

<style scoped>
:root {
  /*时间线颜色*/
  --archive-timeline: rgba(144, 241, 239, 0.35);
  --archive-timeline-active: pink;
  --archive-timeline-active-title: pink;
  --archive-box-width: 80%;
}

.timeline-box {
  height: max-content;
  margin: 0 auto;
  width: unset;
}

@-webkit-keyframes timeline-active {
  0% {
    width: 7px;
    height: 7px;
  }
  25% {
    width: 8px;
    height: 8px;
  }
  50% {
    width: 9px;
    height: 9px;
  }
  75% {
    width: 10px;
    height: 10px;
  }
  100% {
    width: 11px;
    height: 11px;
  }
}

.timeline-create-time span {
  line-height: 1.5rem;
  /*padding-left: 1rem;*/
}

.timeline-create-link-single ul {
  padding: 0;
}

.timeline-create-link-single ul li {
  list-style: none;
  margin-bottom: 1.5rem;
  display: flex;
}

.timeline-create-link-single ul li .timeline-title span {
  -webkit-animation-duration: 330ms;
  animation-duration: 330ms;
  -webkit-animation-name: archiveEnter;
  animation-name: archiveEnter;
}

.timeline-create-link-single ul li:hover .timeline-title span {
  -webkit-animation: archiveHover 330ms;
  animation: archiveHover 330ms;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  color: var(--archive-timeline-active-title, pink);
}

@-webkit-keyframes archiveShade {
  from {
    box-shadow: rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  }
}

@-webkit-keyframes archiveEnter {
  from {
    padding-left: 10px;
  }
  to {
    padding-left: 0px;
  }
}

@-webkit-keyframes archiveHover {
  from {
    padding-left: 0;
  }
  to {
    padding-left: 10px;
  }
}

.timeline-title a {
  color: #2c3e50;
  font-weight: bold;
}

.timeline-create-page-time span {
  font-size: 13px;
}

.timeline-year {
  height: 3rem;
  position: relative;
  width: 6rem;
  padding-left: 1.15rem;
}

.timeline-year-title:before {
  display: inline-block;
  height: 7px;
  margin: 0 auto;
  position: absolute;
  bottom: 10%;
  content: "";
  border-radius: 10px;
  -webkit-animation: timelineYearLevel 900ms;
  animation: timelineYearLevel 900ms;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.timeline-year:hover .timeline-year-title {
  cursor: pointer;
}

.timeline-year:hover .timeline-year-title:before {
  -webkit-animation: timelineTitleChange 900ms;
  animation: timelineTitleChange 900ms;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes timelineYearLevel {
  from {
    background: rgba(0, 207, 200, .9);
    width: 50%;
  }
  to {
    background: rgba(0, 207, 200, .4);
    width: 15%;
  }
}

@keyframes timelineTitleChange {
  from {
    background: rgba(0, 207, 200, .4);
    width: 15%;
  }
  to {
    width: 50%;
    background: rgba(0, 207, 200, .9);
  }
}

.timeline-year span {
  line-height: 2rem;
  font-weight: bold;
  font-size: 32px;
}

.timeline-item {
  margin-bottom: 1.5rem;
}

</style>