# vueMultiplePages

## 一个Vue多页面应用

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build:dev  //打包开发环境
yarn build:devtest //打包开发测试环境
yarn build:test //打包测试环境
yarn build // 打包正式环境
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 说明
* 使用normalize.css重置样式。
* 添加了axios请求库，并做了简单的拦截。
* 添加了Url参数验证和初始化，window.PAGE_PARAMS保存了Url携带的参数对象。
* window.PAGE_PATH 表示当前页面的名字，如index目录生成index.html，window.PAGE_PATH就是index
* 想要添加自己 UI库,安装好在common.js引用即可。
* 添加了node工具，在src/utils/nodeTool下，运行node index.js -h 即可查看使用方法。
* 添加页面请在pages文件夹下新建目录，在里面放置index.js和Index.vue（建议使用提供的node工具生成页面，他会更新你的配置）。编译后，目录的名字即为网页的名字。至于为什么？请查看page.config.js。

注意：如果页面太多，可以通过在pages下添加分组目录来分类页面,
适用于移动端和PC端不需要单页应用（SPA）的场景，没有路由（vue-route）,页面跳转请使用
```javascript
window.location.href = "./demo.html" + obj2StrParams(params)
```

另外，移动端有更优秀的实践方案，地址https://github.com/xusenlin/VueMultiplePages
