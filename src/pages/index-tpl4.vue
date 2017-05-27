<template>
  <div id="index-page-tpl4" class="bottom-bar-padding">
    <div class="index-head">
      <span class="f-left logo-box"><img :src="info.logo" alt=""></span>
      <span class="f-right collect-btn">
        <i class="icon-heart-o"></i>收藏
      </span>
      <div class="head-cont">
        <h1 class="company-name" v-if="isLogin">某某某某有限公司</h1>
        <h1 class="title" v-else>公司名称</h1>
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

    <div class="margin-b-8 white-bg index-head-nav2">
      <grid-box :cols="3">
        <grid-cell v-for="(item, i) in headNavs" key="i"
                   :to="item.route"
                   :title="item.title"
                   :iconBg="item.iconBg"
                   :icon="item.icon"></grid-cell>
      </grid-box>
    </div>

    <div class="margin-b-8 white-bg headline-box"
      @click="$router.push('trends')">
      <span class="f-left headline-title">企业动态</span>

      <span class="f-right headline-more">
        查看更多
      </span>
      <swiper class="headline-items" :options="headlineOption">

        <swiper-slide class="headline-item"
          v-for="i in Math.ceil(trendsItems.length/2)" :key="i">
          <div class="item-cont"
            v-for="item in trendsItems.slice((i-1)*2, i*2)"
            :key="item.id"
            :to="{ name: 'trends', params: { id: item.id } }">
            {{ item.content }}
          </div>
        </swiper-slide>

      </swiper>
    </div>

    <div class="block-wrap media-nav-box">
      <div class="media-base big-media">
        <router-link :to="{ name: 'scenery' }" >
          <h5 class="media-title">
            公司实景</h5>
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
          <h5 class="media-title" style="color: #fcb630">
            企业画册</h5>
          <p class="media-explain">
            画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍画册介绍
          </p>
        </router-link>
      </div>


      <div class="media-small-imgtxt">
        <router-link :to="{ name: 'scenery' }" >
          <div class="img"><img src="/static/image/cover.jpg" alt=""></div>
          <h5 class="media-title" style="color: #6f9818;">
            企业视频</h5>
          <p class="media-explain">
            视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍视频介绍
          </p>
        </router-link>
      </div>
    </div>

    <div class="block-wrap media-list">
      <router-link to="/goods">
        <h4 class="index-center-title">
          <strong class="title-text">主营产品</strong>
        </h4>
      </router-link>

      <div class="block-cont">
        <div class="media-base" v-for="item in goodsItems" :key="item.id">
          <router-link
            :to="{ name: 'goodsDetail', params: { id: item.id } }" >
            <div class="img"><img :src="item.img" alt=""></div>
            <h5 class="media-title">
              {{ item.title }}</h5>
            <div class="media-price">
              <em> <strong>￥{{ item.price }}</strong></em>
              平方米
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
        trendsItems: [],
        goodsItems: [],
        headNavs: [
          { title: '企业实景', route: '/scenery', icon: 'icon-video-o', iconBg: '#f9cb3a' },
          { title: '企业画册', route: '/photo', icon: 'icon-file-image-o', iconBg: '#fa4d60' },
          { title: '主营动态', route: '/trends', icon: 'icon-newspaper-o', iconBg: '#5486e7' },
          { title: '企业介绍', route: '/intro', icon: 'icon-file-text-o', iconBg: '#7f4ee8' },
          { title: '荣誉证书', route: '/lce', icon: 'icon-certification-o', iconBg: '#4bac5f' },
          { title: '成功案例', route: '/casus', icon: 'icon-cake', iconBg: '#fbd534' }
        ],

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

  #index-page-tpl4 {

    .index-center-title {
      color: #d4676d;
      &:before { display: none; }
    }

    .index-head {
      padding: 8px 10px;
      background-color: #efefef;
      .logo-box {
        width: 35px;
        height: 35px;
        border-radius: 15px;
        overflow: hidden;
      }
    }
    .index-head-nav2 {
      .grid-box {
        padding-top: 15px;
        padding-bottom: 0;
      }
      .grid-cell {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 18px;
      }
      .cell-title {
        width: 2em;
        margin-top: 0;
        margin-left: 8px;
      }
      .ico-box {
        width: 1.7em;
        height: 1.7em;
        line-height: 1.7em;
        border-radius: .6em;
        font-size: 24px;
      }
    }

    .headline-title {
      font-style: normal;
      color: #f7bf38;
    }
    .headline-more {
      line-height: 1.8;
      padding: 0 1.1em;
      margin-top: 13px;
      border-radius: 10px;
      font-size: 12px;
      color: #FFFFFF;
      background-color: #c40112;
    }

    .media-nav-box {
      .big-media, .media-small-imgtxt {
        width: 50%;
        padding: 10px;
      }
      .big-media {
        margin-right: 0;
        border-right: 1px solid $grayBdLight;
        .img {
          margin-top: 10px;
          height: 82px;
        }
        .media-explain {
          height: 6em;
        }
      }
      .media-small-imgtxt {
        .img { margin-top: 8px; }
      }
      .media-small-imgtxt:last-child {
        margin-bottom: 0;
        border-top: 1px solid $grayBdLight;
      }
      .media-title {
        font-weight: normal;
        font-size: 14px;
      }
      .media-explain {
        font-size: 12px;
        color: $gray-light2;
        height: 4.5em;
      }
      .img {
        border: none;
        border-radius: 0;
      }
    }
    .media-list {
      margin-right: -3px;
      .block-cont {
        margin: 0;
        padding-top: 5px;
      }
      .media-base {
        width: 33.3%;
        padding: 6px;
        margin: 0;
        margin-left: -1px;
        margin-top: -1px;
      }
      .media-title {
        font-size: 13px;
        line-height: 1.4;
        height: 2.8em;
        white-space: normal;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .media-price {
        font-size: 12px;
      }
    }
  }

</style>