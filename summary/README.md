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



#### 设计稿是以iphone 6,7,8 设计的，那么开发时也应该以iphone 6,7,8 开发


#### 一个 input 在多种型号手机上的表现
1. 指定不同型号对应 input 尺寸 
```
iphone6:64px
iphone10:120px
iphoneplus:160px 
```
2. 固定比例（比如 inout 高度一定是页面总高度的 10%）
```
input{
    height:10vh
}
```

#### vue组件的 class 和 react组件的 className
* vue
> class 会被加给组件顶层容器
* react
> className 需要手动添加给某个组件元素


#### classPrefix
> 假如有n个页面，都用到公共组件 Layout。由于每个页面的布局情况不同，现在需要给Layout的.content添加多个class,每个class对应一个页面

* 比较直接的做法
> Layout 接受一个 contentClass 属性,专门用于作为 .content 元素的类名
```
// Layout.vue
<template>
    <div class="wrapper">
        <div class="content" :class="contentClass">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        props:['contentClass']
    }
</script>
```
```
// money.vue
<template>
    <Layout contentClass="moneyContent">
       moneyContent
    </Layout>
</template>

// labels.vue
<template>
    <Layout contentClass="labelsContent">
       labelsContent
    </Layout>
</template>
```
这样做的问题在于,当 Layout 组件内部有多个我们需要添加类名的元素时，Layout 组件会需要大量额外的 prop
```
// Layout.vue
<template>
    <div class="wrapper">
        <div class="content" :class="contentClass">
            <slot></slot>
        </div>
        <div class="introduction" :class="introductionClass">
            <slot name="introduction"></slot>
        </div> 
        <div class="other" :class="otherClass">
            <slot name="other"></slot>
        </div> 
    </div>
</template>
<script>
    export default {
        name: "Layout",
        props:['contentClass','introductionClass','otherClass']
    }
</script>
```
```
// money.vue
<template>
    <Layout contentClass="moneyContent" introductionClass="moneyIntroduction" otherClass="moneyOther">
       moneyContent
    </Layout>
</template>
```
* antd 想出来更好的API:classPrefix
```
// Layout.vue
<template>
    <div class="wrapper">
        <div class="content" :class="classPrefix&&`{classPrefix}Content`">
            <slot></slot>
        </div>
        <div class="introduction" :class="classPrefix&&`{classPrefix}introduction`"> 
            <slot name="introduction"></slot>
        </div> 
        <div class="other" :class="classPrefix&&`{classPrefix}other`">
            <slot name="other"></slot>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "Layout",
        props:['classPrefix']
    }
</script>
```
```
// money.vue
<template>
    <Layout contentClass="moneyContent" classPrefix="money">
       moneyContent
    </Layout>
</template>
```


#### :class 里的 js 语法
> ""里的是js语法,''里的是字符串
```
<li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
```
> `/labels/edit/${tag}` 不是一个字符串，是一句 js 代码
```
<router-link v-for="tag in tags" :key=tag to="`/labels/edit/${tag}`">
```

#### 编译时，运行时
* 编译时
> TypeScript=>JavaScript（tsc做的，类型检查也由它负责）

> Ts 在编译时报错
* 运行时
> JavaScript 在浏览器中运行

> Js 在运行时报错
* @Prop(Number) xxx: number|undefined
> Number 为运行时类型
```
// 模板的编译在运行时，即在"运行时"（浏览器环境中）会检查 xxx 的类型是否满足 Number
<Types :xxx="123"/>
```
> number|undefined 为编译时环境
```
// 对该函数的解析在编译时，即在"编译时"会检查 this.xxx 的类型是否满足 number|undefined
dealXXX(){
    this.xxx.toString()
}
```

#### Vue 单文件组件的三种写法
1. 用 JS 对象
```
<script lang="js">
 export default { data, props, methods, created, ...}
</script>
```
2. 用 TS 类
```
<script lang="ts">
 @Component
 export default class XXX extends Vue{
     xxx: string = 'hi';
     @Prop(Number) xxx: number|undefined;
 }
</script>
```
3. 用 JS 类 
```
<script lang="js">

 @Component
 export default class XXX extends Vue{
     xxx = 'hi'
 }
</script>
```

#### 在 ts 中引用 js 文件
```
// moneyModel.js
const moneyModel={
}
export {moneyModel}
```
```
// ts
const moneyModel=require('./moneyModel.js').moneyModel
```


#### Vue 不支持直接从 *.vue 文件中 import 一个 type

#### 开发规范
* 对于 type,应该一律写到 custom.d.ts 里，以便所有文件引用 


#### vue-router
* 回退到刚才的页面
```
this.$router.back()
```
* 跳到404页面
```
this.$router.replace('/404')
```