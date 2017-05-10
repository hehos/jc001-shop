<template>
  <div id="news-detail-page">

    <div class="white-bg news-detail">

      <h3 class="title">{{info.title}}</h3>

      <div class="other-row">
        <span class="f-right read-num">{{info.readNum}}</span>
        <span class="f-left date">{{info.date}}</span>
        <span class="type">{{info.type}}</span>
      </div>
      <div class="content"></div>
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
      })
    },
    watch: {
      info() {
        let contentDom = this.$el.getElementsByClassName('content')[0];
        contentDom.innerHTML = this.info.content;
        contentDom.innerHTML = contentDom.innerText;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #news-detail-page {
    .news-detail {
      padding: 12px;
    }
    .title {
      font-weight: normal;
      margin-bottom: .8em;
      font-size: 1.7em;
    }
    .other-row {
      line-height: 2.8;
      text-align: center;
      border-bottom: 1px solid $grayBdLight;
      color: $gray-light2;
      .type { color: #0ab4e8 }
    }
  }

</style>