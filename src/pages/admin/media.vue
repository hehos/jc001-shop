<template>
  <div id="admin-page">

    <div class="block-wrap">
      <mt-cell title="企业实景" is-link to="/media-scenery"></mt-cell>
      <mt-cell title="电子相册" is-link to="/media-scenery"></mt-cell>
    </div>

    <div class="block-wrap">
      <mt-cell title="企业相册" is-link to="/media-photo"></mt-cell>
      <mt-cell title="企业视频" is-link to="/media-video"></mt-cell>
    </div>

    <div class="block-wrap">
      <mt-cell title="企业新闻" is-link to="/media-news"></mt-cell>
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