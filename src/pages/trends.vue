<template>
  <div id="trends-page">

    <div class="trends-item"
      v-for="(item, i) in items" :key="i">
      <a :href="itemLinks[i]">

      <div class="media-small-imgtxt">
        <div class="img ico-box"
          :style="{ 'background-color': itemsCfg[item.type].iconColor }">
          <span :class="itemsCfg[item.type].icon" class="ico"></span>
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

      <div v-if="item.video" class="video-box">
        <video controls="controls" :src="item.video"></video>
      </div>
      <a class="detail-btn" :href="moreLinks[i]">
        {{ itemsCfg[item.type].linkText? itemsCfg[item.type].linkText: '立即查看' }}
      </a>

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
        itemsCfg: {
          photo: { route: 'photo', title: '电子相册', icon: 'icon-image', iconColor: '#31c74a', linkText: '查看更多' },
          news: { route: 'news', icon: 'icon-newspaper-o', iconColor: '#dc791c', linkText: '查看更多' },
          goods: { route: 'goods', icon: 'icon-goods-o', iconColor: '#ffc42a', linkText: '查看更多' },
          vr: { route: '', icon: 'icon-vr-o', iconColor: '#ff7330' },
          video: { route: 'video', icon: 'icon-video-o', iconColor: '#30c7b8' }
        },
        itemLinks: [],
        moreLinks: []
      }
    },
    created () {
      let param = {}
      apiData.trends(param).then(data => {
        this.items = data.items;
      })
    },
    watch: {
      items() {
        for (let item of this.items) {
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
    mounted() {
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #trends-page {
  
    .video-box {
      video {
        width: 100%;
      }
    }

  }

</style>