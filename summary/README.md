#### URL
* 记账
```
#/money
```
* 标签
```
#/labels
```
* 统计
```
#/statistics
```
* 默认页面
```
#/money
```
* 404 页面

#### 公共组件
* Nav
* Layout
> 常用页面布局

#### svg-sprite-loader
1. 让 ts 识别 svg 文件
> 创建 shims-svg.d.ts
```
import x from '@/assets/icons/money.svg'

console.log(x) // 'images/x1ss.svg'
```
2. 使用 svg-sprite-loader
> 本质上是配置 webpack,config 是 vue-cli 暴露给我们的 webpack 接口
```
config.module
    .rule('svg-sprite')
    .test(/\.svg$/)
    .include.add(dir).end() // 只作用于 icons 目录下的文件
    .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
```

#### 一次引用 icons 目录下的所有 svg
```
// importAllIcons.js
let importAll=(requireContext)=>requireContext.keys().forEach(requireContext)
try{
    importAll(require.context('../assets/icons/',true,/\.svg$/))
}catch (e) {
}
```
```
import '@/helpers/importAllIcons'
```

#### 去除 svg 自带的 path（会影响我们后添加的 css）
1. 安装 svg-sprite-loader-mod
2. 配置 vue.config.js


#### active-class
路由被激活时添加的 class,route-link 专用



#### 如果我们用的某个 loader 有bug,且官方尚未修复，我们该怎么办?
* issues
> 这个项目有 xxx bug
* Pull Request
> 我为这个项目增加了一些功能/解决了一些 bug，请官方 Merge 我的代码
* 所以解决步骤如下
1，在 issues 中对应 bug,应该可以找到对应 pr
2. fork 官方项目代码，merge 上述 pr 代码。
3. publish merge 后的包（loader=>loader-mod）
4. 在我们的项目中使用 loader-mod 而非 loader

#### 页面设计过程
> 以 money 页面为例

最初
```
<template>
    <Layout>
        <div>money</div>
    </Layout>
</template>
```
money 页面模块细分
```
<template>
    <Layout>
        <div>tags</div>
        <div>notes</div>
        <div>type</div>
        <div>number pad</div>
    </Layout>
</template>
```
tags 模块细分
```
<template>
    <Layout>
        <div class="tags">
            <div class="current-tages"></div>
            <div class="new-tages"></div>
        </div>
        <div>notes</div>
        <div>type</div>
        <div>number pad</div>
    </Layout>
</template>
```


#### github 搜索技巧
"font.css"

#### 项目 css 思路
1. reset.css
> 全局样式
```
// App.vue
<style lang="scss">
    * {margin: 0;padding: 0; box-sizing: border-box;}
    *::before {box-sizing: border-box}
    *::after {box-sizing: border-box}
    h1, h2, h3, h4, h5, h6 {font-weight: normal}
</style>
```
2. [font.scss](http://zenozeng.github.io/fonts.css/)
> 跨平台字体设置
3. var.scss
> css 变量
