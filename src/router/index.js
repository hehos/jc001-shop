import Vue from 'vue';
import Router from 'vue-router';

import header from '@/widget/header'
import footer from '@/widget/footer'
import index from '@/pages/index';
import scenery from '@/pages/scenery';
import goods from '@/pages/goods';
import goodsDetail from '@/pages/goods-detail';
import newsDetail from '@/pages/news-detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      components: {
        default: index,
        footer: footer
      }
    },
    {
      path: '/index',
      name: 'index',
      components: {
        default: index,
        footer: footer
      }
    },
    {
      path: '/news-detail/:id',
      name: 'newsDetail',
      components: {
        header: header,
        default: newsDetail
      }
    },
    {
      path: '/goods',
      name: 'goods',
      components: {
        default: goods
      }
    },
    {
      path: '/goods-detail/:id',
      name: 'goodsDetail',
      components: {
        header: header,
        default: goodsDetail
      }
    },
    {
      path: '/scenery',
      name: 'scenery',
      components: {
        header: header,
        default: scenery
      }
    }
  ]
});
