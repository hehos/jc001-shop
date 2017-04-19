import axios from 'axios'
// let base = 'http://wapi.q.cn?api='
let base = '/data/'
// let baseTest = '/'

// 页面数组 ==> 修改页面的配置
let pages = [
  'index',
  'goods',
  'goodsDetail'

];
let pagesData = {};

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

export default pagesData;
