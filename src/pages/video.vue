<template>
  <div>
    视频列表
  </div>
</template>

<script>

  import apiData from '../api';

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

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>