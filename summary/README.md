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