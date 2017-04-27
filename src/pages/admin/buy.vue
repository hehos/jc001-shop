<template>
  <div id="admin-page">

    <mt-header title="VIP会员">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
      <div slot="right">
        <router-link to="/order" class="right-link">订购记录</router-link>
      </div>
    </mt-header>

    <div class="margin-b-8 header-avatar-wrap2">
      <div class="f-left avatar-box">
        <img src="/static/image/avatar.jpg" alt="">
      </div>
      <div class="avatar-cont">
        <div class="user-name">会员名称</div>
        <div>黄金会员套餐</div>
        <div class="sub-info"><em>2018-8-8</em>到期</div>
      </div>
    </div>

    <div class="block-wrap vip-combo-item is-radio"
         v-for="(item, idx) in items" :key="idx">
      <label>
        <span class="mint-radio">
          <input type="radio" name="vipbuy" class="mint-radio-input" :value="idx">
          <span class="mint-radio-core">
          </span>
        </span>
        <div class="media-small-imgtxt buy-page">
          <span class="img">
            <img :src="'/static/image/vip' + (idx + 1) + '-img.gif'" alt=""/>
          </span>
          <div class="media-txt">
            <span class="price f-right"><em>￥<strong>{{ item.price }}</strong></em>/元/年</span>
            <h5 class="media-title">
              <span class="media-title-text">
                <span v-if="item.eventTag" class="msg-num-ico"
                      :class="item.eventClass">
                  {{ item.eventTag }}
                </span>
                {{ item.title }}
              </span>
            </h5>
            <p class="media-explain">{{ item.content }}</p>
          </div>
        </div>
      </label>
    </div>

    <mt-button id="bottom-fixed-bar" size="large" type="primary">
      立即订购
    </mt-button>

  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'admin_buy',

    data () {
      return {
        items: [
          {
            title: '黄金会员套餐1',
            content: '前两百名，限量特惠',
            price: '8888.00',
            eventTag: '惠',
            eventClass: 'hui-ico'
          },
          {
            title: '铂金会员套餐1',
            content: '前两百名，限量特惠',
            price: '8888.00',
            eventTag: '',
            eventClass: ''
          },
          {
            title: '至尊会员套餐1',
            content: '前两百名，限量特惠',
            price: '8888.00',
            eventTag: '荐',
            eventClass: 'jian-ico'
          }
        ]
      }
    },
    created () {
      let param = {}
      apiData.index(param).then(data => {
      })
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";
  @import "../../scss/_mixins.scss";

  .media-small-imgtxt.buy-page {
    .media-title-text {
      position: relative;
    }
    .media-title {
      overflow: visible;
      white-space: normal;
    }
    .msg-num-ico {
      width: 16px;
      height: 14px;
      line-height: 13px;
      right: -1.5em;
      top: -1em;
      border-radius: 10%;
      &:after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid $brand-danger;
        border-right: 4px solid transparent;
        border-left: 0px solid transparent;
        position: absolute;
        left: 5px;
        bottom: -5px;
      }
      &.jian-ico {
        background-color: $brand-success;
        &:after {
          border-top-color: $brand-success;
        }
      }
    }
  }

</style>