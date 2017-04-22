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
  'newsDetail'

];

let postPages = [
  'goodsDetail',
  'newsDetail'

];

let pagesData = {
  post: {}
};

// function firstUpperCase(str) {
//   return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).trim();
// }

for (let page of  pages) {
  // var page = firstUpperCase(page);
  pagesData[page] =
    params => {
      return axios.get(`${base}${page}.json`, { params: params }).then(res => {
        return res.data
      })
    };
}

for (let page of  postPages) {
  // var page = firstUpperCase(page);
  pagesData.post[page] =
    params => {
      return axios.post(`${base}${page}.json`, params).then(res => {
        return res.data
      })
    };
}

export default pagesData;
