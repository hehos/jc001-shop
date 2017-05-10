<template>

  <div id="index-page-tpl2" class="bottom-bar-padding">

    <div class="margin-b-8 index-head1 clearfix">
      <router-link to="/message" class="f-right right-btn" v-if="isLogin">
        <span class="icon-heart-o"></span>
        <div class="right-btn-text">有888收藏</div>
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

    <div class="margin-b-8 white-bg index-head-nav2">
      <grid-box>
        <grid-cell v-for="(item, i) in headNavs" key="i"
          :title="item.title"
          :iconBg="item.iconBg"
          :icon="item.icon"></grid-cell>
      </grid-box>
    </div>

    <div class="scenery-block">
      <h4 class="media-title index-center-title">
        <strong class="title-text">公司实景</strong>
      </h4>
      <router-link class="media-base" to="/scenery">
        <span class="thumbnail">
          <img src="/static/image/banner.jpg" alt=""/>
        </span>
      </router-link>
    </div>

    <div class="trends-item"
         v-for="(item, i) in trendsItems" :key="i">
      <a :href="itemLinks[i]">

        <div class="media-small-imgtxt">
          <div class="img ico-box"
               :style="{ 'background-color': itemsCfg[item.type].iconColor }">
            <span :class="itemsCfg[item.type].icon"></span>
          </div>
          <div class="media-txt">
            <h5 class="media-title">
              {{ itemsCfg[item.type].title ? itemsCfg[item.type].title: item.title }}
          </h5>
            <p class="media-explain">
              <i class="icon-clock2-o"></i>{{ item.date }}
          </p>
          </div>
        </div>
        <div class="content">{{ item.content }}</div>
        <div v-if="item.img" class="img"><img :src="item.img" alt=""></div>

      </a>

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
        trendsItems: [],
        itemLinks: [],
        moreLinks: [],
        itemsCfg: {
          photo: { route: 'photo', title: '电子相册', icon: 'icon-image', iconColor: '#31c74a', linkText: '查看更多' },
          news: { route: 'news', icon: 'icon-newspaper-o', iconColor: '#dc791c', linkText: '查看更多' },
          goods: { route: 'goods', icon: 'icon-goods-o', iconColor: '#ffc42a', linkText: '查看更多' },
          vr: { route: '', icon: 'icon-vr-o', iconColor: '#ff7330' },
          video: { route: 'video', icon: 'icon-video-o', iconColor: '#30c7b8' }
        },
        headNavs: [
          { title: '企业介绍', route: '/intro', icon: 'icon-building-o', iconBg: '#fedd50' },
          { title: '荣誉证书', route: '/lce', icon: 'icon-certification-o', iconBg: '#4cd7c2' },
          { title: '成功案例', route: '/casus', icon: 'icon-cake', iconBg: '#8fd22a' },
          { title: '主营产品', route: '/goods', icon: 'icon-goods-o', iconBg: '#79cbf1' }
        ]
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

    watch: {
      trendsItems() {
        for (let item of this.trendsItems) {
          var itemLink = '';
          var moreLink = '';
          if (item.url) {
            itemLink = moreLink = item.url;
          } else {
            itemLink = moreLink = `/#/${this.itemsCfg[item.type].route}`;
            itemLink += item.id ? `/${item.id}` : '';
          }
          this.itemLinks.push(itemLink);
          this.moreLinks.push(moreLink);
        }
      }
    },
    components: {

    }
  }

</script>

<style lang="scss">

  @import "../scss/_variables";
  @import "../scss/_mixins";

  #index-page-tpl2 {

    $themeColor: #971200;

    .index-head1 {
      background-color: $themeColor;
      em { color: #ff9c01; }
      .right-btn {
        margin-top: -2px;
        text-align: center;
        font-size: 20px;
      }
      .right-btn-text {
        margin-top: 5px;
        font-size: 12px;
      }
      .icon-heart-o {
        display: inline-block;
        width: 2em;
        height: 2em;
        line-height: 2em;
        background-color: lighten($themeColor, 5%);
        border-radius: 100%;
      }
    }
    .index-head-nav2 {
      padding-top: 8px;
      .grid-cell { margin-bottom: 8px; }
      .cell-title { margin-top: 10px; }
      .ico-box.isBg {
        border-radius: 100%;
        width: 2.5em;
        height: 2.5em;
        line-height: 2.5em;
        font-size: 24px;
      }
    }

    .scenery-block {
      background-color: #FFFFFF;
      .media-title {
        color: lighten($themeColor, 5%);
      }
    }

  }

</style>