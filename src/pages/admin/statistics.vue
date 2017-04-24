<template>
  <div id="admin-page" class="statistics-page">

    <div class="statistics-total">

      <div class="circleProgress_wrapper">
        <div class="wrapper left">
          <div class="circleProgress leftcircle"></div>
        </div>
        <div class="wrapper right">
          <div class="circleProgress rightcircle"></div>
        </div>
        <div class="cont-wrap">
          <div>今日浏览</div>
          <div class="big-font-size">8888</div>
        </div>
      </div>

    </div>

    <div class="block-wrap statistics-total2">
      <div class="layout-flex-nav">
        <div class="flex-item">
          <span class="ico-box"><i class="icon-eye"></i>888</span>
          <div class="text">昨日预览</div>
        </div>
        <div class="flex-item">
          <span class="ico-box"><i class="icon-heart-o"></i>888</span>
          <div class="text">累计收藏</div>
        </div>
        <div class="flex-item">
          <span class="ico-box"><i class="icon-share22"></i>888</span>
          <div class="text">累计分享</div>
        </div>
      </div>
      <router-link class="margin-12 more-guest" to="/"><i class="icon-users-o"></i>查看访客</router-link>
    </div>


    <div class="block-wrap statistics-single" v-for="item in singleItems">
      <router-link class="title-bar" to="/goods">
        <h2 class="title"><i :class="singleItemsCfg[item.type].icon"></i>
          {{ singleItemsCfg[item.type].name }}</h2>
      </router-link>

      <div class="block-cont">
        <div class="layout-flex-nav">
          <div class="flex-item">
            <span class="ico-box"><span class="icon-eye"></span></span>
            <div class="text">人气：{{ item.lookNum }}</div>
          </div>
          <div class="flex-item">
            <span class="ico-box"><span class="icon-heart-o"></span></span>
            <div class="text">收藏：{{ item.collectNum }}</div>
          </div>
          <div class="flex-item">
            <span class="ico-box"><span class="icon-share22"></span></span>
            <div class="text">分享：{{ item.shareNum }}</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'template',

    data () {
      return {
        singleItems: [],
        singleItemsCfg: {
          shop: { name: '店铺', icon: 'icon-shop-o' },
          card: { name: '店长名片', icon: 'icon-certification-o' },
          goods: { name: '商品', icon: 'icon-shop-o' }
        }
      }
    },
    created () {
      let param = {}
      apiData.statistics(param).then(data => {
        this.singleItems = data.singleItems;
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";
  @import "../../scss/_mixins.scss";

  .statistics-page {
    .block-wrap .block-cont {
      margin-top: 0;
    }

    .more-guest {
      display: block;
      line-height: 3;
      text-align: center;
      border: 1px solid $grayBdLight;
    }

    .statistics-total {
      margin: 30px 0;
      .rightcircle {
        transform: rotate(46deg);
      }
      .leftcircle {
        transform: rotate(44deg);
      }
      .cont-wrap {
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 20px;
        right: 20px;
        border-radius: 50%;
      @include background-color-rgba(#fff, .6);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .big-font-size {
        margin-top: 10px;
        font-size: 2em;
        font-weight: bold;
        color: $gray2;
      }
    }

    .statistics-total2 {
      padding-bottom: 1px;
      .ico-box {
        font-size: 1.3em;
        color: inherit;
      }
      .flex-item:nth-child(1) i  {
        color: #6DA9D4;
      }
      .flex-item:nth-child(2) i  {
        color: #FFC905;
      }
      .flex-item:nth-child(3) i  {
        color: #DA4644;
      }
    }

    .statistics-single {
      .title-bar i { color: #00b3ee; }
    }

  }



</style>