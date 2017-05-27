<template>
  <div id="lce-page">
    <div class="white-bg media-base"
      v-for="item in items">
      <span class="img">
        <img :src="item.img" alt=""/>
      </span>
      <h4 class="media-title">{{ item.title }}</h4>
    </div>
  </div>
</template>

<script>

  import { mapMutations } from 'vuex'
  import apiData from '../api';

  export default {
    name: 'lce',

    data () {
      return {
        items: []
      }
    },
    mounted () {
      let param = {}
      apiData.lce(param).then(data => {
        this.items = data.items;
      })
//      this.$store.commit({
//        // 调用指定了命名空间的模块
//        type: 'baseModule/setHeadInfo',
//        headerTitle: '荣誉证书'
//      });
      this.setHeadInfo({ headerTitle: '荣誉证书' });
    },
    methods: {
      ...mapMutations('baseModule', [
        'setHeadInfo'
      ])
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #lce-page {
    .media-base {
      padding: 10px;
      margin-bottom: 8px;
      text-align: center;
    }
  }

</style>