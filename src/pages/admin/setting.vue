<template>
  <div id="admin-page" class="admin-setting">

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="企业信息" is-link to="/company-info"></mt-cell>
      <mt-cell title="企业名片" is-link to="/card-manage"></mt-cell>
      <mt-cell title="荣誉证书" is-link></mt-cell>
      <mt-cell title="成功案例" is-link></mt-cell>
    </div>

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="企业认证" is-link></mt-cell>
      <mt-cell title="资质证书" is-link></mt-cell>
      <mt-cell title="账户管理" is-link></mt-cell>
    </div>

    <div class="white-bg margin-b-8 block-wrap">
      <mt-cell title="网站装修" is-link><i class="msg-point-ico"></i></mt-cell>
      <mt-cell title="服务中心" is-link><i class="msg-point-ico"></i></mt-cell>
      <mt-cell title="邀请好友" is-link></mt-cell>
    </div>

  </div>
</template>

<script>

  import apiData from '../../api';

  export default {
    name: 'admin_setting',

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

  .admin-setting {
    .mint-cell-value {
      position: relative;
    }
  }

</style>