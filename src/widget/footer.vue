<template>
  <footer id="footer">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="1">
        <i slot="icon" class="icon-home-o"></i>
        管理中心
      </mt-tab-item>
      <mt-tab-item id="2">
        <i slot="icon" class="icon-certification-o"></i>
        名片
      </mt-tab-item>
      <mt-tab-item id="3">
        <i slot="icon" class="icon-comment-o3"></i>
        留言
      </mt-tab-item>
      <mt-tab-item id="4">
        <i slot="icon" class="icon-share22"></i>
        分享
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'footer',

    data () {
      return {
        selected: -1
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

  #footer {
    .mint-tab-item-icon {
      font-size: 18px;
    }
  }

</style>