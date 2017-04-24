<template>
  <div id="admin-page" class="message-page">

    <div class="white-bg media-small-imgtxt general-imgtxt2"
         v-for="(item, idx) in items" :key="idx">
      <router-link :to="{ path: item.route }">

        <span class="img">
          <img :src="item.img" alt=""/>
        </span>
        <div class="media-txt">
           <span class="f-right time">
                <i class="icon-clock2-o"></i>{{ item.date }}
              </span>
          <h5 class="media-title">
            {{ item.title }}</a></h5>
          <p class="media-explain">

            {{ item.content }}
          </p>
        </div>

      </router-link>
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
      apiData.message(param).then(data => {
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

  .message-page {
    .media-small-imgtxt {
      .img {
        width: 50px;
        height: 50px;
        line-height: middleImg(50px);
        border-radius: 5px;
      }
      .media-title {
        margin-bottom: 12px;
      }
      .media-explain {
        color: #9E9E9E;
      }
    }
  }


</style>