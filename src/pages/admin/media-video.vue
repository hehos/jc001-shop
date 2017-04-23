<template>
  <div id="admin-page">

    <div class="block-wrap media-list">
      <div class="block-cont">
        <div class="media-base" v-for="n in 4">
          <div class="img"><img src="/static/image/banner.jpg" alt="4:3比例"></div>
          <h5 class="media-title">视频标题视频标题视频标题视频标题</h5>
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