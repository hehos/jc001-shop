## 方法一 

> vue+webpack 环境模式，更多使用方法，阅读 [vue单文件组件开发](https://cn.vuejs.org/v2/guide/single-file-components.html)

将组件的data替换成实际项目中的data：
```
  export default {
    name: 'lce',

    data () {
      return {
        items: []
      }
    },
    mounted () {
      // 请求参数
      let param = {};
      // 发送get请求获取数据
      apiData.lce(param).then(data => {
        this.items = data.items;
      })
    } 
  }
```
路由写法
```
// 链接到 http://ip:post/#/scenery
<router-link to="/scenery">企业实景</router-link>

// 链接到 http://ip:post/#/scenery/id
<router-link 
	:to="{ name: 'scenery', params: { id: item.id } }">企业实景
</router-link>
 
```

添加其他事件操作逻辑或者其他方法:
```
	<template>
	  <div id="lce-page">
		  <button @click="clickMethod"></button>
	  </div>
	</template>
  export default {
    name: 'lce',

    data () {
      return {
        items: []
      }
    },
		methods: {
			clickMethod() {
				console.log();
			}
		}
  }
```

## 方法二

> 原生模式+vue模式

引入相应资源文件
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!-- 先引入 Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 引入组件库(有就引入） -->
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
```

开始使用 原生模式+vue 开发

> 更多使用，阅读 [vue文档](https://cn.vuejs.org/)

```
<div id="app">
<div>
<script>
  new Vue({
    el: '#banner',
    data: {
    
    }
  })
</script>
```

## 方法三

> 待改进

```npm run dev```运行项目，在预览模式下copy相应原生html套模板