<template>
  <div id="admin-page">

    <div class="grid-tpls">
      <div class="grid-col-item media-base" v-for="n in 4">
        <router-link to="/tpl-detail">
          <span class="thumbnail">
            <img src="/static/image/tpl.jpg" alt="1:1的比例">
          </span>
          <h4 class="media-title"><em class="f-right sub-tag">免费</em>标题</h4>
        </router-link>
      </div>
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