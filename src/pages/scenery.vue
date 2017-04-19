<template>
  <div>
    公司实景
  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'scenery',

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