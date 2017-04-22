<template>
  <div id="intro-page">

    <mt-cell title="公司名称:" :value="info.company"></mt-cell>
    <mt-cell title="经营模式:" :value="info.bizModel"></mt-cell>
    <mt-cell title="所在地区:" :value="info.addr"></mt-cell>
    <mt-cell title="主营产品:" :value="info.prodect"></mt-cell>
    <mt-cell title="商品条数:" :value="info.proNum"></mt-cell>

    <div class="margin-15 info-title"><strong>认证信息</strong></div>
    <div class="info-grade">
      <span class="grade" v-if="vipGrade">
        <i :class="vipGrade.icon"></i>{{ vipGrade.text }}
        <span>{{ info.age }}年</span>
      </span>
      <span v-if="info.hasBao">宝</span>
      <span v-if="info.hasLce" class="icon-rz-firm"></span>
    </div>

    <div class="margin-15 info-title"><strong>工商注册信息</strong></div>
    <mt-cell title="公司名称:" :value="info.company"></mt-cell>
    <mt-cell title="公司地址:" :value="info.location"></mt-cell>
    <mt-cell title="成立时间:" :value="info.buildDate"></mt-cell>
    <mt-cell title="经营范围:" :value="info.bizScope"></mt-cell>
    <mt-cell title="注册号:" :value="info.proNum"></mt-cell>
    <mt-cell title="法人代表:" :value="info.regId"></mt-cell>
    <mt-cell title="企业类型:" :value="info.companyType"></mt-cell>



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
          { text: 'VIP', icon: 'icon-vip-o', value: 1 },
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



</style>