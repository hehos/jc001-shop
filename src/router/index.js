import Vue from 'vue';
import Router from 'vue-router';

import header from '@/widget/header'
import footer from '@/widget/footer'
import index from '@/pages/index';
import scenery from '@/pages/scenery';
import goods from '@/pages/goods';
import goodsDetail from '@/pages/goods-detail';
import newsDetail from '@/pages/news-detail';
import photo from '@/pages/photo';
import trends from '@/pages/trends';
import video from '@/pages/video';
import videoDetail from '@/pages/video-detail';
import news from '@/pages/news';
import intro from '@/pages/intro';
import lce from '@/pages/lce';
import casus from '@/pages/casus';
import card from '@/pages/card';

import admin from '@/pages/admin/index.vue';
import setting from '@/pages/admin/setting.vue';
import companyInfo from '@/pages/admin/company-info.vue';
import cardManage from '@/pages/admin/card-manage';
import buy from '@/pages/admin/buy.vue';

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
      path: '/intro',
      name: 'intro',
      components: {
        header: header,
        default: intro
      }
    },
    {
      path: '/lce',
      name: 'lce',
      components: {
        header: header,
        default: lce
      }
    },
    {
      path: '/casus',
      name: 'casus',
      components: {
        header: header,
        default: casus
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        header: header,
        default: news
      }
    },
    {
      path: '/news/:id',
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
      path: '/goods/:id',
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
        default: scenery
      }
    },
    {
      path: '/photo',
      name: 'photo',
      components: {
        default: photo
      }
    },
    {
      path: '/trends',
      name: 'trends',
      components: {
        header: header,
        default: trends
      }
    },
    {
      path: '/video',
      name: 'video',
      components: {
        default: video
      }
    },
    {
      path: '/video/:id',
      name: 'videoDetail',
      components: {
        default: videoDetail
      }
    },
    {
      path: '/card',
      name: 'card',
      components: {
        // header: header,
        default: card
      }
    },
    {
      path: '/card-manage',
      name: 'cardManage',
      components: {
        // header: header,
        default: cardManage
      }
    },

    // -----------------------------------------
    // 后台 admin
    {
      path: '/admin',
      name: 'admin',
      components: {
        default: admin
      }
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        header: header,
        default: setting
      }
    },
    {
      path: '/company-info',
      name: 'companyInfo',
      components: {
        header: header,
        default: companyInfo
      }
    },
    {
      path: '/buy',
      name: 'buy',
      components: {
        // header: header,
        default: buy
      }
    }
  ]
});
