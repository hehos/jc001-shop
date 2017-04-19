<template>

  <mt-header :title="state.headerTitle" :fixed="state.isFixed">
    <div slot="left">
      <i @click="$router.go(-1)" class="icon-angle-left3"></i>
      <span v-if="state.headerLeftText">{{ state.headerLeftText }}</span>
    </div>
    <div slot="right">
      <i v-if="state.headerRightIcon" :class="state.headerRightIcon"></i>
      <span v-if="state.headerRightText">{{ state.headerRightText }}</span>
    </div>
  </mt-header>

</template>

<script>

  export default {
    data () {
      return {
        state: {}
      }
    },
    methods: {
      backGo () {
        this.$router.go(-1);
      }
    },
    created: function () {
      this.state = this.$store.state;
    }
  }

</script>
