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

  @import "../scss/photo.scss";

</style>