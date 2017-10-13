<template>
  <div id="intro-page">

    <mt-cell title="公司名称：" :value="info.company"></mt-cell>
    <mt-cell title="经营模式：" :value="info.bizModel"></mt-cell>
    <mt-cell title="所在地区：" :value="info.addr"></mt-cell>
    <mt-cell title="主营产品：" :value="info.prodect"></mt-cell>
    <mt-cell title="商品条数：" :value="info.proNum"></mt-cell>


    <div class="info-title"><strong>认证信息</strong></div>
    <div class="margin-b-8 white-bg grade-info" style="display: block;">
      <span class="info-item" v-if="vipGrade">
        <i :class="vipGrade.icon" class="ceneral-ico"></i>
        <i class="icon-vip-o ceneral-ico"></i>
        <i class="icon-crown-o ceneral-ico"></i>
        <i class="icon-diamond ceneral-ico"></i>
        {{ vipGrade.text }}
        <span><em>{{ info.age }}</em>年</span>
      </span>
      <span class="info-item" v-if="info.hasBao">
        <i class="word-ico">宝</i>
      </span>
      <span class="info-item" v-if="info.hasLce">
        <i class="icon-rz-firm word-ico"></i>
      </span>
    </div>

    <div class="info-title"><strong>工商注册信息</strong></div>
    <mt-cell title="公司名称：" :value="info.company"></mt-cell>
    <mt-cell title="公司地址：" :value="info.location"></mt-cell>
    <mt-cell title="成立时间：" :value="info.buildDate"></mt-cell>
    <mt-cell title="经营范围：" :value="info.bizScope"></mt-cell>
    <mt-cell title="注册号：" :value="info.proNum"></mt-cell>
    <mt-cell title="法人代表：" :value="info.regId"></mt-cell>
    <mt-cell title="企业类型：" :value="info.companyType"></mt-cell>



  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'intro',

    data () {
      return {
        info: {},
        gradeCfg: [
          { text: 'VIP会员', icon: 'icon-vip-o', value: 1 },
          { text: '黄金会员', icon: 'icon-crown-o', value: 2 },
          { text: '钻石会员', icon: 'icon-diamond', value: 3 }
        ]
      }
    },
    created () {
      let param = {}
      apiData.intro(param).then(data => {
        this.info = data.info;
      })
    },
    computed: {
      vipGrade () {
        return this.gradeCfg.filter(
          el => el.value === this.info.grade)[0];
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #intro-page {
    .mint-cell-wrapper {
      align-items: flex-start;
      line-height: 1.5em;
      padding-top: 10px;
      padding-bottom: 10px;
      background-origin: border-box;
    }
    .mint-cell-title {
      flex: 0 0 6em;
      color: $gray2;
    }
    .mint-cell-value {
      color: $gray-dark;
    }

    .info-title {
      margin: 20px 12px 12px;
    }

    .grade-info {
      padding: 10px 12px;
      .info-item {
        display: inline-block;
        margin-right: 10px;
        padding: 5px;
      }
    }
  }


</style>