import Vue from 'vue';
import Router from 'vue-router';

import header from '@/widget/header'
import footer from '@/widget/footer'
import index from '@/pages/index';
import tpl1 from '@/pages/index-tpl1';
import tpl2 from '@/pages/index-tpl2';
import tpl3 from '@/pages/index-tpl3';
import tpl4 from '@/pages/index-tpl4';
import tpl5 from '@/pages/index-tpl5';
import tpl6 from '@/pages/index-tpl6';
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

// import admin from '@/pages/admin/index.vue';
// import setting from '@/pages/admin/setting.vue';
// import companyInfo from '@/pages/admin/company-info.vue';
// import cardManage from '@/pages/admin/card-manage';
// import buy from '@/pages/admin/buy.vue';
// import tpls from '@/pages/admin/tpls.vue';
// import tplDetail from '@/pages/admin/tpl-detail.vue';
// import media from '@/pages/admin/media.vue';
// import mediaScenery from '@/pages/admin/media-scenery.vue';
// import mediaAlbum from '@/pages/admin/media-album.vue';
// import mediaPhoto from '@/pages/admin/media-photo.vue';
// import mediaVideo from '@/pages/admin/media-video.vue';
// import mediaNews from '@/pages/admin/media-news.vue';
// import statistics from '@/pages/admin/statistics.vue';
// import message from '@/pages/admin/message.vue';
// import collect from '@/pages/admin/collect.vue';

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
      path: '/tpl1',
      name: 'tpl1',
      components: {
        default: tpl1,
        footer: footer
      }
    },
    {
      path: '/tpl2',
      name: 'tpl2',
      components: {
        default: tpl2,
        footer: footer
      }
    },
    {
      path: '/tpl3',
      name: 'tpl3',
      components: {
        default: tpl3,
        footer: footer
      }
    },
    {
      path: '/tpl4',
      name: 'tpl4',
      components: {
        default: tpl4,
        footer: footer
      }
    },
    {
      path: '/tpl5',
      name: 'tpl5',
      components: {
        default: tpl5,
        footer: footer
      }
    },
    {
      path: '/tpl6',
      name: 'tpl6',
      components: {
        default: tpl6,
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
    }

    // -----------------------------------------
    // 后台 admin
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   components: {
    //     default: admin
    //   }
    // },
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   components: {
    //     header: header,
    //     default: setting
    //   }
    // },
    // {
    //   path: '/company-info',
    //   name: 'companyInfo',
    //   components: {
    //     header: header,
    //     default: companyInfo
    //   }
    // },
    // {
    //   path: '/card-manage',
    //   name: 'cardManage',
    //   components: {
    //     // header: header,
    //     default: cardManage
    //   }
    // },
    // {
    //   path: '/buy',
    //   name: 'buy',
    //   components: {
    //     // header: header,
    //     default: buy
    //   }
    // },
    // {
    //   path: '/tpls',
    //   name: 'tpls',
    //   components: {
    //     header: header,
    //     default: tpls
    //   }
    // },
    // {
    //   path: '/tpl-detail',
    //   name: 'tplDetail',
    //   components: {
    //     header: header,
    //     default: tplDetail
    //   }
    // },
    // {
    //   path: '/media',
    //   name: 'media',
    //   components: {
    //     header: header,
    //     default: media
    //   }
    // },
    // {
    //   path: '/media-scenery',
    //   name: 'mediaScenery',
    //   components: {
    //     // header: header,
    //     default: mediaScenery
    //   }
    // },
    // {
    //   path: '/media-album',
    //   name: 'mediaAlbum',
    //   components: {
    //     header: header,
    //     default: mediaAlbum
    //   }
    // },
    // {
    //   path: '/media-photo',
    //   name: 'mediaPhoto',
    //   components: {
    //     header: header,
    //     default: mediaPhoto
    //   }
    // },
    // {
    //   path: '/media-video',
    //   name: 'mediaVideo',
    //   components: {
    //     header: header,
    //     default: mediaVideo
    //   }
    // },
    // {
    //   path: '/media-news',
    //   name: 'mediaNews',
    //   components: {
    //     // header: header,
    //     default: mediaNews
    //   }
    // },
    // {
    //   path: '/message',
    //   name: 'message',
    //   components: {
    //     header: header,
    //     default: message
    //   }
    // },
    // {
    //   path: '/statistics',
    //   name: 'statistics',
    //   components: {
    //     header: header,
    //     default: statistics
    //   }
    // },
    // {
    //   path: '/collect',
    //   name: 'collect',
    //   components: {
    //     header: header,
    //     default: collect
    //   }
    // }
  ]
});
