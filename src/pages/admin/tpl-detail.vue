<template>
  <div id="admin-page" class="bottom-bar-padding">
    <div class="margin-12 tpl-intro-content">
      图文介绍
    </div>

    <div id="bottom-fixed-bar">
      <mt-button type="danger" size="large">应用到网站</mt-button>
    </div>
  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'admin_tpls',

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