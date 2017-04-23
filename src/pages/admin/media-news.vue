<template>
  <div id="admin-page">

    <mt-header title="企业新闻">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
      <div slot="right">
        <span class="right-link"><i class="icon-edit3"></i>发布新闻</span>
      </div>
    </mt-header>

    <div class="white-bg media-small-imgtxt general-imgtxt2"
         v-for="(item, idx) in items" :key="idx">
      <router-link :to="{ name: 'newsDetail', params: { id: item.id } }">
          <span class="img">
            <img :src="item.img" alt="5:4比例"/>
          </span>
        <div class="media-txt">
          <h5 class="media-title">
            {{ item.title }}</h5>
          <p class="media-explain">
            阅读：{{ item.readNum }}
          </p>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'template',

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

  @import "../../scss/_variables.scss";
  @import "../../scss/_mixins.scss";



</style>