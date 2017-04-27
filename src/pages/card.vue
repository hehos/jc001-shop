<template>
  <div id="card-page">
    <mt-header title="名片">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
      <div slot="right" @click="popupBoxVisible = true">
        <span class="icon-qrcode"></span>
      </div>
    </mt-header>

    <mt-popup class="qr-popup-box"
              v-model="popupBoxVisible"
              popup-transition="popup-fade">
      <img src="/static/image/qr.jpg" alt="">
    </mt-popup>

    <div class="header-avatar-wrap2">
      <div class="avatar-box">
        <img src="/static/image/avatar.jpg" alt="">
      </div>
      <div class="avatar-cont">
        <div class="user-name">
          张三<span class="job-coll">产品经理</span></div>
        <div class="mobile-row"><i class="icon-phone"></i>188888888888</div>
      </div>

    </div>
    <router-link to="/" class="white-bg margin-b-8 company-info-wrap">
      <div class="company-info-box">
        <div class="grid-item media-small-imgtxt">
          <div class="img">
            <img src="/static/image/logo.gif" alt="">
          </div>
          <div class="media-txt">
            <h5 class="media-title"> 某某某某有限公司</h5>
            <p class="media-explain">入住时间：2014年10月20日</p>
          </div>
        </div>
        <span class="grid-item icon-angle-right2"></span>
      </div>
    </router-link>

    <div class="white-bg margin-b-25 company-state">
      <span class="flex-item">
        <span class="icon-eye"></span>
        <div class="ico-text">人气：8</div>
      </span>
      <span class="flex-item">
        <span class="icon-heart-o"></span>
        <div class="ico-text">收藏：8</div>
      </span>
      <span class="flex-item">
        <span class="icon-share22"></span>
        <div class="ico-text">分享：8</div>
      </span>
    </div>

    <div class="margin-15">
      <mt-button type="danger" size="large">
        加入名片
      </mt-button>
    </div>

    <div class="margin-15">
      <mt-button type="default" size="large">分享该名片</mt-button>
    </div>

    <div class="margin-15">
      <mt-button type="default" size="large">管理我的名片</mt-button>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'template',

    data () {
      return {
        popupBoxVisible: false,
        info: []
      }
    },
    created () {
      let param = {}
      apiData.card(param).then(data => {
        this.info = data.info;
      })
    },
    methods: {
      editCard() {
        this.isOneself = false;
        this.isPreview = false;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/card.scss";

</style>