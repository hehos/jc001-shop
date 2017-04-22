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

    <div id="bottom-fixed-bar" class="bottom-btns">
      <div class="btn-item">
        <span class="icon-heart-o"></span>
        <div class="ico-text">收藏</div>
      </div>
      <div class="btn-item">
        <span class="icon-share22"></span>
        <div class="ico-text">分享</div>
      </div>
      <div class="btn-item contact-btn">
        <mt-button size="large" type="danger">联系方式</mt-button>
      </div>
      <div class="btn-item contact-btn">
        <mt-button class="active-btn" size="large" type="danger">在线询价</mt-button>
      </div>
    </div>
  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'news-detail',

    data () {
      return {
        selected: '1',
        info: []
      }
    },
    created () {
      let param = {}
      apiData.post.goodsDetail(param).then(data => {
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
    padding-bottom: 45px;

    .bottom-btns {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #FFFFFF;
      .btn-item {
        text-align: center;
        flex: 1 1 auto;
      }
      .contact-btn {
        flex-basis: 15%;
      }
      .ico-text {
        font-size: 12px;
        margin-top: 3px;
      }
      .mint-button {
        border-radius: 0;
        font-size: 16px;
      }
    }
  }


</style>