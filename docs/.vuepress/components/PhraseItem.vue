<template>
  <div id="timeline-single" class="timeline-single">
    <div id="timeline-create-links" class="timeline-create-links">
      <div id="timeline-create-time" class="timeline-create-time">
        <span>{{ month }} 月</span>
      </div>

      <div id="timeline-create-link-single" class="timeline-create-link-single">
        <ul>
          <li v-for="(item,index) in currentMonthPageArr" :key="index">
            <div class="timeline-line">
              <div class="timeline-line-icon-par">
                <div class="timeline-line-icon"></div>
              </div>
              <div class="timeline-line-bottom"></div>
            </div>
            <div class="timeline-content"  @click="goPage(item.path)">
              <div :data="item.title" class="timeline-title">
                <!--                <span @click="goPage(item.path)">{{ item.title === "" ? noTitle : item.title }}</span>-->
                <Content :page-key="item.key"/>
              </div>
              <div :data="item.title" class="timeline-create-page-time">
                <span>{{ item.time }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
let noTitle = '暂时没有标题'
try {
  noTitle = __NO_TITLE__
} catch (e) {

}
export default {
  name: "PhraseItem",
  data() {
    return {
      allMonth: [],
      currentMonthPageArr: [],
      noTitle: noTitle
    }
  },
  created() {
      for (let i = 0; i < this.allPageDataArr.length; i++) {
        if (this.allPageDataArr[i].year === this.pageYear && this.allPageDataArr[i].month === this.month) {
          this.currentMonthPageArr.push(this.allPageDataArr[i])
        }
      }
  },
  props: {
    month: '',
    pageYear: '',
    allPageDataArr: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    goPage(path) {
      window.console.log("goPage")
      this.$router.push(path)
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

.timeline-single {

  height: max-content;
  /*margin-top: 1.5rem;*/

  display: flex;
}

.timeline-line {
  text-align: center;
  flex: .1;
}

.timeline-content {
  flex: 6;
  margin-left: 1.5rem;
  border-radius: 7px;
  padding-left: 15px;
}

.timeline-line-icon-par {
  height: .9rem;
  width: 100%;
}

.timeline-line-icon {
  background: var(--archive-timeline, rgba(144, 241, 239, 0.35));
  height: 7px;
  width: 7px;
  border-radius: 100px;
  text-align: center;
  margin: 0 auto;
}

.timeline-line-bottom {
  height: 100%;
  width: 4px;
  background: var(--archive-timeline, rgba(144, 241, 239, 0.35));
  margin: 0 auto;
  margin-top: 3px;
}

.timeline-create-link-single {
  margin-left: 1.15rem;
}

.timeline-create-link-single li:hover .timeline-line-icon {
  -webkit-animation: timeline-active 300ms;
  animation: timeline-active 300ms;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  background: var(--archive-timeline-active, pink);
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

.timeline-create-links {
  flex: 4;
}

.timeline-create-time {
  height: 1.5rem;
  width: 10rem;
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

.timeline-create-link-single ul li:hover .timeline-content {
  cursor: pointer;
  -webkit-animation: archiveShade 600ms;
  animation: archiveShade 600ms;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
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
    padding-left: 0;
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


</style>