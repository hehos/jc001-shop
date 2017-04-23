<template>
  <div id="admin-page">

    <mt-header title="企业实景">
      <div slot="left">
        <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      </div>
      <div slot="right">
        <span class="right-link"><i class="icon-"></i>预览</span>
      </div>
    </mt-header>

    <div class="block-wrap">
      <mt-cell title="VR全景配置" is-link>请输入RUL地址</mt-cell>
    </div>

    <div class="block-wrap media-list">
      <div class="title-bar">
        <h2 class="title">企业图库设置</h2>
      </div>
      <div class="block-cont">
        <div class="media-base" v-for="n in 4">
          <div class="img"><img src="/static/image/banner.jpg" alt="4:3比例"></div>
        </div>
        <div class="media-base">
          <div class="img media-plus-btn"><i class="icon-plus2"></i></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'template',

    data () {
      return {
        items: []
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

  @import "../../scss/_variables.scss";
  @import "../../scss/_mixins.scss";



</style>