---
title: vue前端代码规范
---

使用vue的这两年中，除了部分公司有比较好的代码规范外，也形成了一套自己的编程习惯；
持续更新
<section class="post-content">
            <p><strong>一、JavaScript命名规范</strong></p>

<pre><code>1､命名统一使用语义化的驼峰命名法，能表达出该命名的用义
</code></pre>

<p>例：主页的头部命名组件为header,列表详情下抽出的用户头部，应以userHeader命名，不能叫header </p>

<p><strong>二、CSS命名规范</strong></p>

<pre><code>1.命名统一使用语义化的驼峰命名法，对于过长的双或多英文单词组成的命名， 使用“-”链接，实在太长的，取每个单词的前3字母 + “-”链接（不绝对取前3 字母，根据语义取字母）。
2.设置相同属性的，使用面向属性命名方法，如：都是设置字体相关属性的，以该属性命名
     .fs {
            font: italic bold 12px/24px "Microsoft YaHei";
    }
3.共用，又设置了不同属性的。以public的pub开头 + 语义化名称，如：页面 有多个店铺icon图标，有共同的和不同的样式，共同（重用）的样式命名方法为：
      .pub-shopIcon {
                   width:12px;
                   height:12px;
                   float:left;
                   position:relative;
                   left:0;
                   top:0;
   			}
</code></pre>

<p><strong>三、 Vue 目录结构</strong></p>

<p>1.assets用来放置样式、静态图片，只要src下面的组件中用到的资源就放在assets中。 <br>
2.static用来放没有npm包的第三方插件，字体文件。 <br>
3.assets与components同级 components下的.vue引用静态文件时，相对路径为 ../assets/wapFront <br>
<code>
├── README.md              // 用到的插件和其他项目注意点在这里标明
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── api               // 抽出的axios 接口请求配置
│   ├── assets            //  图片和公用样式
│   ├── components        //  公用组件
│   ├── directives        //  vue 指令
│   ├── filters           //  vue过滤器
│   ├── main.js
│   ├── router            //  路由
│   ├── store
│   ├── utils             // 工具
│   └── views             // 业务页面
└── static                // 没有npm包的第三方插件
</code></p>
        </section>
