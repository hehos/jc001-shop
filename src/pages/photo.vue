<template>
  <div id="photo-page">
    <span id="top-back-btn" @click="$router.go(-1)">
      <i class="icon-angle-left3"></i>
    </span>

    <mt-swipe :auto="0" :showIndicators="false">
      <mt-swipe-item v-for="(item, i) in items" :key="item.id">
        <img :src="item.img" alt="">
        <div class="item-text">
          <span style="margin-right: 15px;">{{i}}/{{items.length}}</span>
          图片介绍图片介绍图片介绍图片介绍图片介绍图片介绍图片介绍图片介绍图片介绍
          图片介绍d图片介绍图片介绍图片介绍图片介绍图片介绍图片介绍
       </div>
      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'photo',

    data () {
      return {
        items: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    created () {
      let param = {}
      apiData.photo(param).then(data => {
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

  #photo-page {
    background-color: #1e2024;

    #top-back-btn {
      color: #FFFFFF;
    }

    .mint-swipe, .swiper-container {
      height: 100vh;
      img {
        height: auto;
        vertical-align: middle;
      }
    }
    .mint-swipe-item, .swiper-slide {
      line-height: 95vh;
      .item-text {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        max-height: 50vh;
        line-height: 1.8;
        padding: 10px 15px;
        overflow: auto;
        font-size: 13px;
        color: #FFFFFF;
        @include background-color-rgba(#1e2024, .2);
      }
    }
    .mint-swipe-indicator {
      background-color: #FFFFFF;
      &.is-active {
        background-color: $orange-dark;
      }
    }
    .swiper-pagination {
      padding-left: 20px;
      text-align: left;
      color: #FFFFFF;
    }
  }

</style>