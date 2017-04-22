<template>
  <div id="casus-page">

    <div class="clearfix">
      <div class="media-base"
           v-for="item in items">
        <div class="photos">
          <span class="img"><img :src="item.img" alt=""></span>
          <span class="img"><img :src="item.img" alt=""></span>
        </div>
        <h4 class="media-title">{{ item.title }}</h4>
      </div>
    </div>


  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'casus',

    data () {
      return {
        items: []
      }
    },
    created () {
      let param = {}
      apiData.casus(param).then(data => {
        console.log(data.items);
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

  #casus-page {
    .media-base {
      float: left;
      padding: 10px 10px 5px;
      width: 50%;
      text-align: center;
      margin-bottom: 0;
      .img {
        height: 130px;
        padding: 3px;
        line-height: middleImg(130px, 8px);
        border: 1px solid $grayBdLight;
        background-color: #FFFFFF;
      }
    }
  }


</style>