<template>

  <div class="tab-cell"
    :class="{
      'on': $parent.value === id && isOn ,
      'has-childs': childs
    }">

    <div v-if="childs" class="popup-mask" @click="selected"
      :style="{ top: maskTop + 'px' }"></div>

    <a class="tab-cell-text"
          @click.stop="selected">
      {{ title }}
    </a>

    <div v-if="childs" class="tab-cell-popup-box">
      <slot></slot>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'tab-cell',

    props: {
      id: [Number, String],
      title: String,

      childs: Array,
      value: {}
    },

    data () {
      return {
        isOn: false,

        maskTop: 0
      }
    },

    methods: {
      selected () {
        this.isOn = !this.isOn;
        this.$parent.$emit('input', this.id)

//        this.$nextTick(() => {
//          console.log(this.$parent.value);
//          console.log(this.isOn);
//        });
      }
    },

    mounted() {
      this.maskTop =
        this.$parent.$refs.tab.getBoundingClientRect().top +
        this.$parent.$refs.tab.clientHeight;
    },
    components: {

    }
  }
</script>