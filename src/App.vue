<template>
  <div id="app">

    <router-view name="header"></router-view>
    <router-view name="header_transparent"></router-view>
    <router-view></router-view>

    <router-view name="footer"></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">

  @import "scss/project-comm.scss";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>