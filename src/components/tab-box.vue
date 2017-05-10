<template>
  <div class="tab-wrap" ref="tab"
    :class="cols? 'tab-col-' + cols: ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab-box',

    props: {
      cols: Number,
      value: {}
    },

    data () {
      return {

      }
    },

    methods: {

    },

    created () {

    },

    components: {
    }
  }
</script>


<style lang="scss">

  @import "tab.scss";

</style>