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

  import apiData from '../api';

  export default {
    name: 'lce',

    data () {
      return {
        items: []
      }
    },
    created () {
      let param = {}
      apiData.lce(param).then(data => {
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

  #lce-page {
    .media-base {
      padding: 10px;
      margin-bottom: 8px;
      text-align: center;
    }
  }

</style>