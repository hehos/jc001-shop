<template>

  <div id="admin-page" class="bottom-bar-padding admin-index">

    <div class="index-head1 clearfix  ">
      <router-link to="/message" class="f-right right-btn" v-if="isLogin">
        <span class="icon-comment-o2"></span>
        <span class="msg-point-ico"></span>
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
            <span>VIP会员</span><em>8</em>年
          </span>
          <span class="no-grade-info" v-else>
            成为VIP会员获取更多权限
          </span>
          <router-link class="yewu-detail"  to="/buy" v-if="isLogin">业务详情</router-link>
        </div>
      </div>
    </div>

    <div class="white-bg margin-b-8 index-head-nav1">

      <router-link to="/collect" class="nav-item">
        <i class="icon-heart-o" style="background-color: #f68326;"></i>
        我的收藏
      </router-link>
      <router-link to="/tpls" class="nav-item">
        <i class="icon-laptop" style="background-color: #ffc905;"></i>
        网站装修
      </router-link>
      <router-link to="/media" class="nav-item">
        <i class="icon-file-movie-o" style="background-color: #db4544;"></i>
        媒体库管理
      </router-link>
      <router-link to="/setting" class="nav-item">
        <i class="icon-cog-o" style="background-color: #6ca9d5;"></i>
        信息管理
      </router-link>

    </div>

    <div class="shop-trends" v-if="isLogin">

      <div class="trends-item">
        <router-link to="/statistics">
          <div class="media-small-imgtxt">
            <div class="img ico-box" style="background-color: rgb(49, 199, 74);">
              <span class="icon-line-chart"></span>
            </div>
            <div class="media-txt">
              <h5 class="media-title"> 推广统计 </h5>
              <p class="media-explain"><i class="icon-clock2-o"></i>4/20 10:10 </p>
            </div>
          </div>
          <div class="content">
            <div class="gray-light2 cont-center" style="font-size: 32px">8888</div>
            <div class="cont-center">今日浏览</div>
           </div>
        </router-link>
        <!---->
        <router-link to="/statistics" class="detail-btn"> 立即查看 </router-link>
      </div>

      <div class="trends-item">
        <a href="/#/photo">
          <div class="media-small-imgtxt">
            <div class="img ico-box" style="background-color: rgb(49, 199, 74);">
              <span class="icon-comment-o3"></span>
            </div>
            <div class="media-txt">
              <h5 class="media-title"> 最新留言 </h5>
              <p class="media-explain"><i class="icon-clock2-o"></i>4/20 10:10 </p>
            </div>
          </div>
          <div class="margin-t-15 margin-b-5 gray-light2">XXX用户</div>
          <div class="content">
            留言内容留言内容留言内容留言内容留言内容
           </div>
        </a>
        <!---->
        <a href="/#/photo" class="detail-btn"> 立即查看 </a>
      </div>

    </div>
    <div class="no-shop-trends" v-else>
      未登陆时的图文宣传
    </div>


    <div id="bottom-fixed-bar" class="white-bg">

      <div class="tabbar-box" v-if="isLogin">

        <span class="tabbar-item" @click="$router.push('/')">
          <span class="icon-eye"></span>
          <div class="text">预览</div>
        </span>

        <span class="tabbar-item">
          <span class="icon-qrcode"></span>
          <div class="text">二维码</div>
        </span>

        <span class="tabbar-item">
          <span class="icon-share2"></span>
          <div class="text">分享</div>
        </span>

      </div>

      <div class="btn-box">
          {{  isLogin? '快速发布': '加入会员' }}
      </div>

    </div>

  </div>

</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'admin_index',

    data () {
      return {
        selected: -1,
        items: [],
        isLogin: true
      }
    },
    created () {
      let param = {}
      apiData.index(param).then(data => {
        this.items = data.items;
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables";
  @import "../../scss/_mixins";

  .admin-index {

    .head-wrap {

      padding: 15px;
      background-color: #b12f0d;
      color: #FFFFFF;

      .logo-box {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        font-size: 40px;
      }

      .title {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: normal;
      }

      .grade-info {
        padding: 2px 5px;
        margin-right: 5px;
        background-color: #FFFFFF;
        color: $gray-dark;
        [class^="icon-"], [class*=" icon-"] {
          font-size: 13px;
          width: 1.3em;
          height: 1.3em;
          line-height: 1.4em;
        }
      }
      .yewu-detail, .no-grade-info {
        color: #feea77;
      }
      /*.yewu-detail {*/
      /*padding: 1px 5px;*/
      /*border: 1px solid #e29992;*/
      /*border-radius: 3px;*/
      /*background-color: darken(#b12f0d, 5%);*/
      /*}*/


      .message-btn {
        position: relative;
        font-size: 18px;
      }
      .msg-point-ico {
        border: 1px solid #FFFFFF;
      }
    }

    .head-nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      font-size: 17px;
      padding-left: 1px;
      .nav-item {
        flex: 1 1 50%;
        padding: 12px 10px;
        border: 1px solid $grayBdLight;
        margin-top: -1px;
        margin-left: -1px;
      }
      [class^="icon-"], [class*=" icon-"] {
        display: inline-block;
        width: 1.7em;
        height: 1.7em;
        line-height: 1.8em;
        border-radius: 50%;
        color: #FFFFFF;
        text-align: center;
      }
    }

    #bottom-fixed-bar {
      align-items: stretch;
      text-align: center;
      border-top: 1px solid $grayBdLight;
      &, .tabbar-box, .btn-box {
        display: flex;
      }
      .tabbar-box, .btn-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .tabbar-box {
        flex: 1 1 66.6%;
        padding: 6px 0;
        .text {
          margin-top: 3px;
        }
        [class^="icon-"], [class*=" icon-"] {
          font-size: 16px;
          color: $gray2;
        }
      }
      .btn-box {
        flex: 1 1 33.3%;
        min-height: 45px;
        background-color: $brand-danger;
        color: #FFFFFF;
        font-size: 15px;
      }

    }
  }

</style>