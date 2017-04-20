<template>
  <div id="trends-page">

    <div class="trends-item"
      v-for="(item, i) in items" :key="i">
      <!--<a :href="item.route? `/#/${item.route}/${item.id}`: item.url">-->
      <router-link :to="{
          path: item.route? item.route: item.url,

        }">

      <div class="media-small-imgtxt">
        <div class="img ico-box" :style="{ 'background-color': icons[item.type].color }">
          <span :class="icons[item.type].icon"></span>
        </div>
        <div class="media-txt">
          <h5 class="media-title">
            {{ item.name ? item.name: item.title }}
          </h5>
          <p class="media-explain">
            <i class="icon-clock2-o"></i>{{ item.date }}
          </p>
        </div>
      </div>
      <div class="content">{{ item.content }}</div>
      <div v-if="item.img" class="img"><img :src="item.img" alt=""></div>

      </router-link>

      <div v-if="item.video" class="video-box">
        <video controls="controls" :src="item.video"></video>
      </div>
      <a :href="item.route? `/#/${item.route}/${item.id}`: item.url"
         class="detail-btn">立即查看</a>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'events',

    data () {
      return {
        items: [],
        icons: {
          photo: { icon: 'icon-image', color: '#31c74a' },
          news: { icon: 'icon-newspaper-o', color: '#dc791c' },
          goods: { icon: 'icon-goods-o', color: '#ffc42a' },
          vr: { icon: 'icon-vr-o', color: '#ff7330' },
          video: { icon: 'icon-video-o', color: '#30c7b8' }
        }
      }
    },
    created () {
      let param = {}
      apiData.trends(param).then(data => {
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

  #trends-page {
    .trends-item {
      background-color: #FFFFFF;
      margin-bottom: 8px;
      padding: 12px 12px 3px;
      .content {
        line-height: 1.6;
        margin-bottom: 12px;
      }
      .detail-btn {
        display: block;
        line-height: 3;
        text-align: center;
        margin-top: 8px;
        color: #1F76ED;
        @include slenderBorder($dir: top);
      }
    }

    .media-small-imgtxt {
      margin-bottom: 8px;
      .ico-box {
        margin-top: 3px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        [class^="icon-"], [class*=" icon-"] {
          font-size: 24px;
          vertical-align: middle;
        }
      }

    }
    .video-box {
      video {
        width: 100%;
      }
    }
  }

</style>