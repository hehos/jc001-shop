<template>
  <div id="news-detail-page">

    <div class="news-detail">

      <h3 class="title">{{info.title}}</h3>

      <div class="other-row">
        <span class="f-right read-num">{{info.readNum}}</span>
        <span class="date">{{info.date}}</span>
        <span class="type">{{info.type}}</span>
      </div>
      <div class="content" v-html="info.content"></div>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'news-detail',

    data () {
      return {
        info: {}
      }
    },
    created () {
      let param = {}
      apiData.newsDetail(param).then(data => {
        this.info = data.info;
//        console.log(data.info.content)
      })
    },
//    watch: {
//      info() {
//        this.$el.getElementsByClassName('content').innerHtml = this.info.content;
//        console.log(this.$el.getElementsByClassName('content'));
//      }
//    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #news-detail-page {

  }

</style>