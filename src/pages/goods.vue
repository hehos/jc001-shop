<template>
  <div id="goods-page">
    <header class="mint-header">
      <div class="mint-header-button is-left">
        <span @click="$router.go(-1)"><i class="icon-angle-left2"></i></span>
      </div>
      <mt-search
        v-model="searchKey"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
      <div class="mint-header-button is-right" @click="switchShow">
        <span><i class="icon-row-list" v-if="showIsList"></i>
          <i class="icon-cake" v-else></i></span>
      </div>
    </header>

    <div class="margin-b-8 block-wrap filter-wrap">
      <span class="filter-btn"
        @click="filterPopupBox = true">
        筛选
        <i class="icon-filter-o"></i>
      </span>
      <tab-box v-model="cellSelected">
        <tab-cell v-model="childsCellSelected[idx]"
          v-for="(item, idx) in filterDatas"
          :key="idx"
          :id="item.id"
          :title="item.title"
          :childs="item.childs">
          <tab-popup-cell v-if="item.childs"
            v-for="cItem in item.childs"
            :key="cItem.id"
            :id="cItem.id"
            :title="cItem.title"
            :rightIcon="true">
          </tab-popup-cell>
        </tab-cell>
      </tab-box>
    </div>

    <!-- 筛选弹出框 -->
    <mt-popup v-model="filterPopupBox" position="right" :modal="true">

      <h3 class="margin-10 filter-title">筛选</h3>

      <div class="filter-item" :key="cate.id"
           v-for="cate in cates">
        <h4 class="margin-15 cate-title">{{ cate.name }}</h4>
        <label-box class="margin-15">
          <label-cell :key="subCate.id"
            v-for="subCate in cate.subCates"
            :title="subCate.name"></label-cell>
        </label-box>
      </div>

      <div class="margin-t-20 padding-10">

        <mt-button @click.native="saveEdit"
                   class="active-btn" type="primary">重置</mt-button>
        <mt-button @click.native="saveEdit"
                   class="active-btn" type="primary">保存</mt-button>
      </div>

    </mt-popup>


    <div class="block-wrap media-list">
      <div class="media-base" v-for="item in items" :key="item.id">
        <router-link
          :to="{ name: 'goods', params: { id: item.id } }" >
          <div class="img"><img :src="item.img" alt=""></div>
          <h5 class="media-title">
            {{ item.title }}</h5>
          <div class="media-price">
            <span class="f-right">平方米</span>
            <em> <strong>￥{{ item.price }}</strong></em>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>

  import apiData from '../api';

  export default {
    name: 'goods',

    data () {
      return {
        searchKey: '',
        showIsList: false,

        filterPopupBox: false,
        cellSelected: -1,
        childsCellSelected: [],
        filterDatas: [
          {
            id: 0,
            title: '综合'
          },
          {
            id: 1,
            title: '销量',
            childs: [
              { id: 0, title: '从低到高' },
              { id: 1, title: '从告到低' }
            ]
          },
          {
            id: 2,
            title: '新品'
          },
          {
            id: 3,
            title: '价格'
          }
        ],
        items: [],
        cates: []
      }
    },
    created () {
      let params = {}
      apiData.goods(params).then(data => {
        this.items = data.items;
        this.cates = data.cates;
      })
    },
    methods: {
      switchShow() {
        this.showIsList = !this.showIsList;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #goods-page {
    .mint-searchbar {
      background-color: #FFFFFF;
      padding: 0 10px;
    }
    .mint-searchbar-inner {
      height: auto;
      background-color: #ffffff;
    }
    .mint-popup-right {
      width: 80%;
      height: 100%;
    }
    .labels .label-cell {
      background-color: $grayBdLight;
    }

    .filter-wrap {
      position: relative;
      .filter-btn {
        position: absolute;
        line-height: 42px;
        margin-left: 10px;
        top: 0;
        right: 0;
        z-index: 12;
      }
      .tab-wrap {
        padding-right: 60px;
        background-color: #FFFFFF;
      }
    }
  }

</style>