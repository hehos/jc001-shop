<template>
  <div id="index-page" class="bottom-bar-padding">
    <div class="index-head">
      <span class="f-left logo-box"><img :src="info.logo" alt=""></span>
      <span class="f-right ico-box"><span class="icon-heart-o"></span></span>
      <h1 class="company-name">{{ info.company }}</h1>
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



    <div class="margin-b-8 white-bg headline-box"
      @click="$router.push('trends')">
      <span class="f-left headline-title">企业动态</span>
      <span class="f-right headline-more">
        <i class="icon-angle-right3"></i>
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

    <div class="margin-b-8 media-nav-box">
      <div class="media-base big-media">
        <router-link :to="{ name: 'scenery' }" >
          <h5 class="media-title">
            公司<em>实景</em></h5>
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

  #index-page {

    .index-head {
      background-color: #c40112;
      color: #FFFFFF;
    }

    .index-head-nav {
      color: $gray-dark;
      background-color: #c40112;
      color: #ffffff;
    }
  }

</style>