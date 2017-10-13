<template>

  <div id="index-page-tpl1" class="bottom-bar-padding">

    <div class="index-head1 clearfix  ">
      <router-link to="/message" class="f-right right-btn" v-if="isLogin">
        <span class="icon-heart-o"></span>
        <div class="right-btn-text"><em>888</em><br>收藏人数</div>
      </router-link>
      <span class="f-left img logo-box">
        <img v-if="isLogin" src="/static/image/logo.gif" alt="1:1比例">
        <i class="icon-image"></i>
      </span>

      <div class="head-cont">
        <h1 class="title" v-if="isLogin">某某某某有限公司</h1>
        <h1 class="title" v-else>公司名称</h1>
        <div>
          <span class="grade-info" v-if="isLogin">
            <i class="ico icon-vip-o ceneral-ico"></i>
            <i><span>VIP会员</span><em>8</em>年</i>
            <i class="ico icon-check-circle" style="color: #7ac814;"></i>
            <i class="ico icon-rz-firm"></i>
          </span>
          <span class="no-grade-info" v-else>
            成为VIP会员获取更多权限
          </span>
        </div>
      </div>
    </div>

    <div class="margin-b-8 white-bg index-head-nav">
      <router-link class="nav-item" to="/intro">企业介绍</router-link>
      <router-link class="nav-item" to="/lce">荣誉证书</router-link>
      <router-link class="nav-item" to="/casus">成功案例</router-link>
    </div>

    <div class="margin-b-8 media-nav-box">
      <div class="media-base big-media">
        <router-link :to="{ name: 'scenery' }" >
          <h5 class="media-title">
            <em>公司实景</em></h5>
          <p class="media-explain">
            实景介绍实景介绍实景介绍实景介绍实景介绍实景介绍实景介绍
          </p>
          <div class="img"
               style="background-image: url(/static/image/banner.jpg)"></div>
        </router-link>
      </div>

      <div class="media-small-imgtxt">
        <router-link :to="{ name: 'scenery' }" >
          <div class="img"><img src="/static/image/cover.jpg" alt=""></div>
          <h5 class="media-title">
            企业<em>画册</em></h5>
          <p class="media-explain">
            画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍
          </p>
        </router-link>
      </div>

      <div class="media-small-imgtxt">
        <router-link :to="{ name: 'scenery' }" >
          <div class="img"><img src="/static/image/cover.jpg" alt=""></div>
          <h5 class="media-title">
            企业<em>视频</em></h5>
          <p class="media-explain">
            视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍
          </p>
        </router-link>
      </div>
    </div>

    <div class="margin-b-8 white-bg headline-box"
         @click="$router.push('trends')">
      <span class="f-left headline-title">企业动态</span>
      <span class="f-right headline-more">
        <i class="icon-angle-right3"></i>
      </span>
      <swiper class="headline-items" :options="headlineOption">

        <swiper-slide class="headline-item"
                      v-for="i in Math.ceil(trendsItems.length/2)"
                      :key="i">
          <div class="item-cont"
               v-for="item in trendsItems.slice((i-1)*2, i*2)"
               :key="item.id"
               :to="{ name: 'trends', params: { id: item.id } }">
            {{ item.content }}
          </div>
        </swiper-slide>

      </swiper>
    </div>


    <div class="block-wrap media-list">
      <router-link class="title-bar" to="/goods">
        <h2 class="title">主营产品</h2>
        <span class="more">
          <i class=" icon-angle-right"></i>
        </span>
      </router-link>

      <div class="block-cont">
        <div class="media-base" v-for="item in goodsItems" :key="item.id">
          <router-link
            :to="{ name: 'goodsDetail', params: { id: item.id } }" >
            <div class="img"><img :src="item.img" alt=""></div>
            <h5 class="media-title">
              {{ item.title }}</h5>
            <div class="media-price">
              <span class="f-right">平方米</span>
              <em> <strong>￥{{ item.price }}</strong></em>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

  import apiData from '../api';

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

  #index-page-tpl1 {

    $themeColor: #157fb1;
    $themeBg: #e8f5fd;

    padding-bottom: 55px;

    background-color: $themeBg;
    &  #footer .mint-tabbar {
      color: $gray-light2;
      background-color: darken($themeBg, 5%);
    }
    .index-head1 {
      background-color: $themeColor;
      em { color: #ff9c01; }
    }
    .index-head-nav {
      background-color: $themeColor;
      color: #FFFFFF;
      &, .nav-item {
        border-color: darken($themeColor, 5%);
      }
    }

    .media-nav-box {
      em { color: lighten($themeColor, 15%); }
      .media-title, em { font-style: italic; }
    }

    .headline-box .headline-title {
      color: lighten($themeColor, 15%);
    }

    .media-list {
      margin-bottom: 0;
      padding-bottom: 10px;
    }

  }

</style>