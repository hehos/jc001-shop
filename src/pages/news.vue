<template>
  <div id="news-page">

    <div class="white-bg media-small-imgtxt general-imgtxt2"
         v-for="(item, idx) in items" :key="idx">
      <router-link :to="{ name: 'newsDetail', params: { id: item.id } }">
          <span class="img">
            <img :src="item.img" alt=""/>
          </span>
        <div class="media-txt">
          <h5 class="media-title">
            {{ item.title }}</h5>
          <p class="media-explain">
                <span class="f-right like-btn on">
                  <i class="icon-thumbs-o-up"></i>
                  <i class="icon-thumbs-up"></i>
                  {{ item.likeNum }}
                </span>
            阅读：{{ item.readNum }}
            </p>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'news',

    data () {
      return {
        items: []
      }
    },
    created () {
      let param = {}
      apiData.news(param).then(data => {
        this.items = data.items;
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>