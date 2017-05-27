<template>
  <div id="index-page-tpl6" class="bottom-bar-padding">

    <div class="index-head">
      <span class="f-left logo-box"><img :src="info.logo" alt=""></span>
      <span class="f-right collect-btn">
        <i class="icon-heart-o"></i>收藏
      </span>
      <div class="head-cont">
        <h1 class="company-name" v-if="isLogin">某某某某有限公司</h1>
        <h1 class="company-name" v-else>公司名称</h1>
        <div>
          <span class="grade-info" v-if="isLogin">
            <i class="icon-vip-o"></i>
            <i><span>VIP会员</span><em>8</em>年</i>
            <i class="icon-check-circle" style="color: #7ac814;"></i>
            <i class="icon-rz-firm"></i>
          </span>
          <span class="no-grade-info" v-else>
            成为VIP会员获取更多权限
          </span>
        </div>
      </div>
    </div>

    <div class="white-bg index-banner">
      <mt-swipe :auto="4000" style="height: 180px;">
        <mt-swipe-item v-for="item in bannerItems" :key="item.id"
          :to="{ name: 'newDetail', params: { id: item.id } }">
          <img :src="item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="margin-b-8 white-bg index-head-nav">
      <router-link class="nav-item" to="/scenery">企业实景</router-link>
      <router-link class="nav-item" to="/photo">企业画册</router-link>
      <router-link class="nav-item" to="/trends">企业动态</router-link>
      <router-link class="nav-item" to="/intro">企业介绍</router-link>
      <router-link class="nav-item" to="/lce">荣誉证书</router-link>
      <router-link class="nav-item" to="/casus">成功案例</router-link>
    </div>

    <div class="margin-b-8 media-nav-box">
      <div class="big-media">
        <router-link :to="{ name: 'scenery' }" >
          <img src="/static/image/media-nav1.jpg" alt="">
          <p class="big-media-text">执念门窗系统秉承严谨、创新的执念门窗系统秉承严 谨、创新的理念理念秉承严谨现代</p>
        </router-link>
      </div>

      <div class="small-media">
        <router-link :to="{ name: 'scenery' }" >
          <img src="/static/image/media-nav2.jpg" alt="">
        </router-link>
      </div>


      <div class="small-media">
        <router-link :to="{ name: 'scenery' }" >
          <img src="/static/image/media-nav3.jpg" alt="">
        </router-link>
      </div>
    </div>

    <div class="block-wrap media-list">
      <router-link class="title-row" to="/goods">
        <h3 class="title-text">主营产品</h3>
        <div class="title-en">The   company's   main   products</div>
      </router-link>

      <div class="block-cont">
        <div class="media-base" v-for="item in goodsItems" :key="item.id">
          <router-link
            :to="{ name: 'goodsDetail', params: { id: item.id } }" >
            <div class="img"><img :src="item.img" alt=""></div>
            <div class="media-price">
              <span class="f-right">平方米</span>
              <em><strong>RMB&nbsp;{{ item.price }}</strong></em>
            </div>
            <h5 class="media-title">
              {{ item.title }}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import apiData from '../api'

  export default {
    name: 'template',

    data () {
      return {
        isLogin: true,
        info: {},
        bannerItems: [],
        trendsItems: [],
        goodsItems: [],

        headlineOption: {
          autoplay: 4000,
          direction: 'vertical',
          autoplayDisableOnInteraction: false,
          loop: true
        }
      }
    },
    created () {
      let param = {}
      apiData.index(param).then(data => {
        this.info = data.info;
        this.bannerItems = data.bannerItems;
        this.trendsItems = data.trendsItems;
        this.goodsItems = data.goodsItems;
      })
    },
    components: {

    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables";
  @import "../scss/_mixins";

  #index-page-tpl6 {

    $themeColor: #616161;

    .index-head {
      padding: 8px 10px;
      background-color: $themeColor;
      color: #ffffff;
      .logo-box {
        width: 35px;
        height: 35px;
        border-radius: 15px;
        overflow: hidden;
      }
      .collect-btn {
        background-color: lighten($themeColor, 10%);
      }
    }

    .index-head-nav {
      background-color: lighten($themeColor, 5%);
      color: #eceaeb;
    }

    .media-nav-box {
      @include clearfix();
      .big-media, .small-media {
        float: left;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .big-media {
        position: relative;
        padding: 0;
        width: 63%;
        height: 235px;
        margin-right: 1%;
      }
      .big-media-text {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        line-height: 1.8;
        font-family: "microsoft yahei", simsun;
        font-size: 12px;
        color: #ffffff;
      }
      .small-media {
        width: 36%;
        height: 115px;
        &:last-child {
          margin-top: 5px;
        }
      }
    }

    .media-list {
      font-family: "microsoft yahei", simsun;
      .title-row {
        display: block;
        text-align: center;
        padding: 15px 0 25px;
        background-color: #393834;
      }
      .title-text {
        margin: 20px 0;
        font-size: 46px;
        color: #b0afae;
        font-weight: normal;
      }
      .title-en {
        line-height: 1.8;
        margin: 0 40px;
        color: #a8a8a6;
        border: 2px solid #898885;
        border-width: 2px 0;
      }

      .block-cont {
        margin: 0 5px;
      }
      .media-base {
        border:none;
        width: 48%;
        margin: 0 1% 10px;
      }
      .media-title {
        font-size: 14px;
        color: $gray;
      }
      .media-price {
        margin-top: 10px;
        padding-bottom: 0;
      }
      em {
        color: $themeColor;
      }
    }
  }

</style>