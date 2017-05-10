<template>
  <div class="grid-box" :class="cols ? `grid-col-${cols}` : ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid-box',
    props: {
      cols: Number
    }
  }
</script>

<style lang="scss">
  .grid-box {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 10px 5px;
    .grid-cell {
      flex: 0 1 25%;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      align-items: center;
      margin-bottom: 15px;
    }
    .ico-box {
    font-size: 32px;
      &.isBg {
        color: #fff;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
        border-radius: .4em;
     }
    }
    .cell-title {
      margin-top: 5px;
    }
  }

  $cols: 3, 4, 5, 6;
  @each $col in $cols {
    .grid-col-#{$col} {
      .grid-cell { flex: 0 1 (1/$col)*100%; }
    }
  }

</style>