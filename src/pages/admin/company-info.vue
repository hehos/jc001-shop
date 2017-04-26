<template>
  <div id="admin-page">

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="企业logo" is-link to="/company-info">
        <img class="avatar-img" src="/static/image/avatar.jpg" alt="">
      </mt-cell>
      <mt-cell title="企业简介" is-link>xxx姓名</mt-cell>
      <mt-cell title="企业认证" is-link></mt-cell>
      <mt-cell title="认证信息" is-link></mt-cell>
    </div>

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="联系人头像" is-link to="/company-info">
        <img class="avatar-img" src="/static/image/avatar.jpg" alt="">
      </mt-cell>
      <mt-cell title="联系人昵称" is-link></mt-cell>
    </div>

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="企业名称" is-link to="/company-info"></mt-cell>
      <mt-cell title="经营模式" is-link></mt-cell>
      <mt-cell title="主营产品" is-link></mt-cell>
      <mt-cell title="客服电话" is-link>400-888-8888</mt-cell>
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
  @import "../../scss/admin.scss";



</style>