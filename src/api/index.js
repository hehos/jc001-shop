import axios from 'axios'
// let base = 'http://wapi.q.cn?api='
let base = '/data/'
// let baseTest = '/'

// 页面数组 ==> 修改页面的配置
let pages = [
  'index',
  'goods',
  'goodsDetail',
  'photo',
  'scenery',
  'trends',
  'video',
  'videoDetail',
  'intro',
  'lce',
  'casus',
  'news',
  'newsDetail',
  'card',
  'statistics',
  'message',
  'collect'

];

let postPages = [

];

let pagesData = {
  post: {}
};

// 首字母转大写
// function firstUpperCase(str) {
//   return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).trim();
// }

for (let page of  pages) {
  pagesData[page] =
    params => {
      return axios.get(`${base}${page}.json`, { params: params }).then(res => {
        return res.data
      })
    };
}

for (let page of  postPages) {
  pagesData.post[page] =
    params => {
      return axios.post(`${base}${page}.json`, params).then(res => {
        return res.data
      })
    };
}

export default pagesData;
