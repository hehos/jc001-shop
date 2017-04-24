<template>
  <div  id="admin-page" class="collect-page">

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">店铺</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">

        <div class="block-wrap media-list">

          <div class="media-base" v-for="item in goodsItems" :key="item.id">
            <router-link
              :to="{ name: 'goodsDetail', params: { id: item.id } }" >
              <div class="img"><img :src="item.img" alt="1:1比例"></div>
              <h5 class="media-title">
                {{ item.title }}</h5>
              <div class="media-price">
                <span class="f-right">平方米</span>
                <em> <strong>￥{{ item.price }}</strong></em>
              </div>
            </router-link>
          </div>
        </div>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">

        <div class="white-bg margin-b-8 shop-item"
             v-for="item in shopItems" :key="item.id">
          <div class="media-small-imgtxt general-imgtxt">
            <router-link :to="{ path: '/' }">
              <div class="img"><img :src="item.logo" alt=""></div>
              <div class="media-txt">
                <h5 class="media-title">{{ item.company }}</h5>
                <div class="grade-info">
                  <span class="info-item" v-if="item.grade">
                    <i :class="vipGrade(item.grade).icon"
                       class="ceneral-ico"></i>
                    {{ vipGrade(item.grade).text }}
                    <span><em>{{ item.age }}</em>年</span>
                  </span>
                  <span class="info-item" v-if="item.hasBao">
                    <i class="myicon-word word-ico">宝</i>
                  </span>
                  <span class="info-item" v-if="item.hasLce">
                    <i class="icon-rz-firm word-ico"></i>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="collect-btn">
            <span class="icon-heart-o"></span>
            <div class="text">有{{ item.collectNum }}收藏</div>
          </div>
        </div>

      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'collect',

    data () {
      return {
        selected: '1',
        goodsItems: [],
        shopItems: [],
        gradeCfg: [
          { text: 'VIP会员', icon: 'icon-vip-o', value: 1 },
          { text: '黄金会员', icon: 'icon-crown-o', value: 2 },
          { text: '钻石会员', icon: 'icon-diamond', value: 3 }
        ]
      }
    },
    created () {
      let param = {}
      apiData.collect(param).then(data => {
        this.goodsItems = data.goodsItems;
        this.shopItems = data.shopItems;
      })
    },
    methods: {
      vipGrade(grade) {
        return this.gradeCfg.filter(
          el => el.value === grade)[0];
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";
  @import "../../scss/_mixins.scss";

  .collect-page {
    .shop-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
    }
    .media-small-imgtxt {
      flex: 1 0 auto;
      margin-bottom: 0;

      border-right: 1px solid $grayBdLight;
    }
    .media-title {
      margin-top: 5px;
    }
    .grade-info {
      .ceneral-ico {
        font-size: 12px;
      }
      .word-ico {
        font-size: 13px;
      }
    }

    .collect-btn {
      width: 7em;
      text-align: center;
      font-size: 13px;
      color: $gray2;
      [class^="icon-"], [class*=" icon-"] {
        font-size: 22px;
        color: #1F76ED;
      }
      .text { margin-top: 5px; }
    }
  }


</style>