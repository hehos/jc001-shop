<template>
  <div id[="video-detail-page">
    <span id="top-back-btn" @click="$router.go(-1)">
      <i class="icon-angle-left3"></i>
    </span>

    视频详细页
  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'template',

    data () {
      return {

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

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>