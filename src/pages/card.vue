<template>
  <div id="card-page">

    <div class="header-avatar-wrap2">
      <div class="avatar-box">
        <img src="/static/image/avatar.jpg" alt="">
      </div>
      <div class="avatar-cont">
        <div class="user-name">张三 <span class="job-coll">产品经理</span></div>
        <div class="mobile-row"><i class="icon-phone"></i>188888888888</div>
      </div>
    </div>
    <router-link to="/" class="white-bg margin-b-8 company-info-wrap">
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
      <mt-button type="danger" size="large">加入名片夹</mt-button>
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
        info: []
      }
    },
    created () {
      let param = {}
      apiData.card(param).then(data => {
        this.info = data.info;
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #card-page {
    .header-avatar-wrap2 {
      background-color: #fef2da;
      padding: 15px;
      display: flex;
      .avatar-box {
        flex: 0 1 auto;
        width: 85px;
        height: 85px;
        border: 2px solid #ffffff;
        overflow: hidden;
        border-radius: 100%;
      }
      .avatar-cont {
        flex: 4 1 auto;
        line-height: 1.6;
        margin-left: 20px;
      }
      .user-name {
        line-height: 2.2;
        margin-bottom: 10px;
        font-size: 18px;
      }
      .job-coll {
        display: inline-block;
        vertical-align: sub;
        font-size: 14px;
        color: $gray-light2;
      }
      .mobile-row {
        color: $brand-danger;
        font-size: 16px;
      }
    }

    .company-info-wrap {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      .media-small-imgtxt {
        flex: 1 1 auto;
        margin-bottom: 0;
      }
      .img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
      .media-title {
        margin-top: 5px;
        font-size: 17px;
      }
    }
    .company-state {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 15px 10px;
      text-align: center;
      [class^="icon-"], [class*=" icon-"] {
        font-size: 18px;
        color: $gray2;
      }
      .ico-text {
        margin-top: 10px;
      }
    }
  }

</style>