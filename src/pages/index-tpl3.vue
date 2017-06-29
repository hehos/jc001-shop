<template>
  <div id="index-page-tpl3" class="bottom-bar-padding">
    <div class="index-head">
      <span class="f-left logo-box"><img :src="info.logo" alt=""></span>
      <span class="f-right collect-btn">
        收藏
      </span>
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

    <div class="margin-b-8 white-bg index-head-nav2">
      <grid-box :cols="3">
        <grid-cell v-for="(item, i) in headNavs" key="i"
                   :to="item.route"
                   :title="item.title"
                   :iconBg="item.iconBg"
                   :icon="item.icon"></grid-cell>
      </grid-box>
    </div>

    <div class="white-bg headline-box">
      <h4 class="index-center-title">
        <strong class="title-text">企业动态</strong>
      </h4>
      <div class="headline-cont"
           @click="$router.push('trends')">
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
    </div>

    <div class="block-wrap padding-b-15 media-nav-box">
      <div class="media-nav-item">
        <div class="media-base">
       <span class="img"
             style="background-image: url('/static/image/banner.jpg')">
          </span>
          <h4 class="media-title tran-layer">公司实景</h4>
        </div>
        <p class="intro-cont">介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息</p>
      </div>
      <div class="media-nav-item">
        <div class="media-base">
       <span class="img"
             style="background-image: url('/static/image/banner.jpg')">
          </span>
          <h4 class="media-title tran-layer">企业视频</h4>
        </div>
        <p class="intro-cont">介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息</p>
      </div>
      <div class="media-nav-item">
        <div class="media-base">
          <span class="img"
                style="background-image: url('/static/image/banner.jpg')">
          </span>
          <h4 class="media-title tran-layer">企业画册</h4>
        </div>
        <p class="intro-cont">介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息</p>
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
        headNavs: [
          { title: '企业实景', route: '/scenery', icon: 'icon-video-o' },
          { title: '企业画册', route: '/photo', icon: 'icon-file-image-o' },
          { title: '主营动态', route: '/trends', icon: 'icon-newspaper-o' },
          { title: '企业介绍', route: '/intro', icon: 'icon-file-text-o' },
          { title: '荣誉证书', route: '/lce', icon: 'icon-certification-o' },
          { title: '成功案例', route: '/casus', icon: 'icon-cake' }
        ],
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

  #index-page-tpl3 {
    $themeColor: #0392a2;

    .index-head, &  #footer .mint-tabbar {
      background-color: #2f3237;
    }
    .index-head {
      color: #FFFFFF;
      .collect-btn {
        background-color: #fffdfc;
        color: $activeColor;
      }
    }
    &  #footer .mint-tabbar {
      color: #fffdfc;
    }

    .index-center-title {
      .title-text {
        font-size: 1.2em;
      }
      &:before {
        height: 2px;
        background-color: lighten($themeColor, 10%);
      }
    }

    .index-head-nav2 {
      color: $themeColor;
      font-weight: bold;
      .grid-box {
        padding-bottom: 0;
      }
      .grid-cell {
        margin-bottom: 25px;
      }
      .cell-title {
        font-size: 15px;
        margin-top: 10px;
      }
    }

    .headline-box {
      padding-left: 12px;
      .headline-cont {
        margin-bottom: 8px;
      }
    }

    .media-nav-box {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      .media-base {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 5px;
        overflow: hidden;
      }
      .media-title {
        margin-bottom: 0;
        font-size: 14px;
        text-align: center;
        background-color: rgba($themeColor, .8);
        font-weight: normal;
      }
      .img {
        height: 85px;
      }
    }
    .media-nav-item {
      flex: 1 1 30%;
      margin: 0 5px;
      .intro-cont {
        color: $gray2;
        line-height: 1.5;
        height: 3em;
        width: 100%;
        overflow: hidden;
      }
    }
    .block-cont {
      margin: 0 5px;
    }
  }


</style>