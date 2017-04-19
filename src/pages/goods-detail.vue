<template>
  <div id="goods-detail-page">

    <div class="detail-banner">
      <mt-swipe :auto="4000" style="height: 200px;">
        <mt-swipe-item v-for="img in info.banner" :key="img">
          <img :src="img" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="block-wrap summary-info">
      <h4 class="title">{{ info.title }}</h4>
      <div class="content">{{ info.content }}</div>
      <div class="bd-line"></div>
      <div class="price"><em>价格 <strong>￥7777</strong></em></div>
      <div class="itemno">产品编号：CNSKJKFA888789</div>
    </div>

    <div class="block-wrap company-info">
      <div class="media-small-imgtxt">
        <a href="" class="img"><img :src="info.logo" alt=""/></a>
        <div class="media-txt">
          <h5 class="media-title">{{ info.company }}</h5>
          <p class="media-explain"><i class="icon-map2-o"></i>
          所在地：{{ info.addr }}</p>
        </div>
      </div>
      <div class="label-item"><span>经营模式：</span>{{ info.bizModel }}</div>
      <div class="label-item"><span>主营产品：</span>{{ info.prodect }}</div>
    </div>

    <div class="block-wrap">
      <mt-navbar v-model="selected" class="margin-b-2">
        <mt-tab-item id="1">商品详情</mt-tab-item>
        <mt-tab-item id="2">VR效果展示</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected" :swipeable="true">
        <mt-tab-container-item id="1">
          商品详情 <br>
          商品详情 <br>
          商品详情 <br>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          VR效果展示 <br>
          VR效果展示 <br>
          VR效果展示 <br>
          VR效果展示 <br>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'news-detail',

    data () {
      return {
        selected: 1,
        info: []
      }
    },
    created () {
      let param = {}
      apiData.goodsDetail(param).then(data => {
        this.info = data.info;
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #goods-detail-page {

  }


</style>