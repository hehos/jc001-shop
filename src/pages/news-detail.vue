<template>
  <div>
    新闻详细页
  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'news-detail',

    data () {
      return {

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

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";



</style>