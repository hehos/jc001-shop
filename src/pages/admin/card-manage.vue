<template>
  <div id="card-page" class="bottom-bar-padding">
    <mt-header title="名片">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
      <div slot="right" @click="popupBoxVisible = true">
        <span class="icon-qrcode"></span>
      </div>
    </mt-header>

    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="1">

        <div class="header-avatar-wrap2">
          <div class="avatar-box">
            <img src="/static/image/avatar.jpg" alt="">
          </div>
          <div class="avatar-cont" v-if="isPreview">
            <div class="user-name">
              张三<span class="job-coll">产品经理</span></div>
            <div class="mobile-row"><i class="icon-phone"></i>188888888888</div>
          </div>

          <div class="avatar-cont" v-else>
            <div class="user-name">
              <input type="text" placeholder="张三">
              <input class="job-coll" type="text" placeholder="产品经理">
            </div>
            <div class="mobile-row"><i class="icon-phone"></i>
              <input type="tel" placeholder="188888888888">
            </div>
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

        <div class="margin-15" v-if="isPreview" @click="isPreview = false">
          <mt-button type="danger" size="large">
            编辑名片夹
          </mt-button>
        </div>
        <div class="margin-15" v-if="!isPreview" @click="isPreview = true">
          <mt-button type="danger" size="large">
            保存
          </mt-button>
        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="2">

        <mt-cell-swipe
          class="margin-b-8 cardcase-item"
          :right="rightBtnConfig()"
          v-for="n in 2" :key="n"
          title="用户名"
          label="产品经理"
          is-link>
          <img  class="cardcase-ico-box" slot="icon"
                src="/static/image/avatar.jpg" alt="1:1比例">
          1888888888
        </mt-cell-swipe>

        <mt-cell-swipe
          class="margin-b-8 cardcase-item"
          :right="rightBtnConfig()"
          v-for="n in 10" :key="n"
          title="用户名"
          label="产品经理"
          is-link>
          <span class="icon-user cardcase-ico-box" slot="icon"></span>
          1888888888
        </mt-cell-swipe>


      </mt-tab-container-item>

    </mt-tab-container>

    <mt-popup class="qr-popup-box"
              v-model="popupBoxVisible"
              popup-transition="popup-fade">
      <img src="/static/image/qr.jpg" alt="">
    </mt-popup>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="1">
        <i class="icon-certification-o" slot="icon"></i>
        名片
      </mt-tab-item>
      <mt-tab-item id="2">
        <i class="icon-users2-o" slot="icon"></i>
        名片夹
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'template',

    data () {
      return {
        selected: '2',
        isPreview: true,
        popupBoxVisible: false,
        info: []
      }
    },
    created () {
      let param = {}
      apiData.card(param).then(data => {
        this.info = data.info;
      })

      this.rightBtnConfig = function () {
        return [
          {
            content: '删除',
            style: { background: 'red', color: '#fff' },
//            handler: () => {
//              this.$messagebox.confirm('确定删除?').then(action => {
//              });
//            }
            handler: () => this.$messagebox('delete')
          }
        ];
      }
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

  @import "../../scss/card.scss";

</style>