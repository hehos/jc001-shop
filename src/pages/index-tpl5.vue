<template>
  <div id="index-page-tpl5" class="bottom-bar-padding">

    <div class="index-head1 clearfix  ">
      <router-link to="/message" class="f-right right-btn" v-if="isLogin">
        <span class="icon-star"></span>
        <div class="right-btn-text">888<br>收藏</div>
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
            <i class="icon-vip-o ceneral-ico"></i>
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

    <div class="margin-b-8 white-bg index-head-nav2">
      <grid-box :cols="3">
        <grid-cell v-for="(item, i) in headNavs" key="i"
                   :title="item.title"
                   :iconColor="item.iconColor"
                   :icon="item.icon"></grid-cell>
      </grid-box>
    </div>

    <div class="margin-b-8 media-nav-box">
      <div class="media-base big-media">
        <router-link :to="{ name: 'scenery' }" >
          <h5 class="media-title">
            公司实景<span class="special-tag">HOT</span></h5>
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
            企业画册</h5>
          <p class="media-explain">
            画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍
          </p>
        </router-link>
      </div>


      <div class="media-small-imgtxt">
        <router-link :to="{ name: 'scenery' }" >
          <div class="img"><img src="/static/image/cover.jpg" alt=""></div>
          <h5 class="media-title">
            企业视频<span class="special-tag">NEW</span></h5>
          <p class="media-explain">
            视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍
          </p>
        </router-link>
      </div>
    </div>

    <div class="margin-b-8 white-bg headline-box"
         @click="$router.push('trends')">
      <span class="f-left headline-title">
        企业动态</span>
      <span class="f-right headline-more">
        <i class="icon-angle-right3"></i>
      </span>
      <swiper class="headline-items" :options="headlineOption">

        <swiper-slide class="headline-item"
                      v-for="(item, i) in trendsItems" :key="i">
          <div class="item-cont">
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

  import apiData from '../api'

  export default {
    name: 'template',

    data () {
      return {
        isLogin: true,
        info: {},
        bannerItems: [],
        headNavs: [
          { title: '企业介绍', route: '/intro', icon: 'icon-building', iconColor: '#f6a124' },
          { title: '荣誉证书', route: '/lce', icon: 'icon-certification-o', iconColor: '#0ca5e1' },
          { title: '成功案例', route: '/casus', icon: 'icon-th-large', iconColor: '#18ac96' }
        ],
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

  #index-page-tpl5 {

    $themeColor: #fca62f;

    .index-head1 {
      background-color: darken($themeColor, 5%);
      .icon-star {
        display: inline-block;
        padding: 4px;
        background-color: #ffffff;
        border-radius: 100%;
        color: $themeColor;
      }
    }

    .index-head-nav2 {
      padding-top: 10px;
      .cell-title {
        margin-top: .7em;
        font-weight: bold;
      }
    }

    .media-nav-box {
      .big-media {
        width: 45%;
        margin-right: 0;
      }
      .media-title {
        font-size: 14px;
        color: $gray2;
      }
      .media-explain {
        color: $gray-light2;
        font-size: 12px;
      }
      .media-small-imgtxt {
        margin-bottom: 0;
        padding-bottom: 10px;
        .img {
          height: 65px;
          width: 65px;
          margin-top: 5px;
          border-radius: 10px;
        }
      }
      .special-tag {
        position: relative;
        height: 10px;
        line-height: 10px;
        padding: 0 3px;
        margin-left: 7px;
        font-size: 12px;
        border-radius: 2px;
        font-weight: normal;
        color: #ffffff;
        background-color: $themeColor;
        &:before {
          content: "";
          position: absolute;
          left: -4px;
          top: 50%;
          margin-top: -2px;
          @include caret-left(2px, $themeColor);
          border-right-width: 4px;
        }
      }
    }

    .headline-box {
      padding-left: 15px;
      .headline-title {
        width: 4.5em;
        line-height: 1.15;
        margin-top: 0;
        margin-right: 1em;
        font-size: 12px;
        font-style: normal;
        color: $themeColor;
        padding-left: 2em;
        background-image: url("../image/dongtai-icon.gif");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: left center;
      }
    }
    .headline-items, .headline-more {
      line-height: 2;
      height: 2em;
    }

    .media-list {
      .block-cont {
        margin: 10px 5px;
      }
      .media-base { border:none; }
      .media-title {
        font-size: 14px;
        color: $gray;
      }
      em {
        color: $themeColor;
      }
    }

  }

</style>