---
title: 干货学习
tags: javaScript
categories: 编程
---
websocket/JS的类型/S中的typeof能得到的那些类型/js中有哪些内置函数 9 种


<div class="article fmt article__content" data-id="1190000018628100" data-license="">

<h1 id="articleHeader0">websocket</h1>
<p>Websocket同http一样都是是基于tcp的,可靠性的双向通信协议，是建立在tcp之上的，并且是持久化的协议。</p>
<h3 id="articleHeader1">websocket 和http区别？</h3>
<ul>
<li>
<p>相同点</p>
<ul>
<li>都是应用层的协议</li>
<li>都是基于tcp,可靠的协议</li>
</ul>
</li>
<li>
<p>不同点</p>
<ul>
<li>websocket是持久化的协议.</li>
<li>websocket是双向通信协议，模拟socket协议,可以双向发送信息，而HTTP是单向的</li>
<li>websocket可以在服务器端主动向客户端发送信息，而http的服务端,只能通过客户端主动请求</li>
</ul>
</li>
</ul>
<h3 id="articleHeader2">请描述一下cookie、sessionStorage和localStorage的区别？</h3>
<ul>
<li>相同点：都存储在客户端</li>
<li>
<p>不同点</p>
<ol>
<li>存储大小<br> cookie数据大小不能超过4k。<br> sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。</li>
<li>有效时间<br>localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；<br>sessionStorage 数据在当前浏览器窗口关闭后自动删除。<br>cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭</li>
<li>数据与服务器之间的交互方式<br>cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端<br>sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存</li>
</ol>
</li>
</ul>
<h3 id="articleHeader3">JS的类型？</h3>
<ul>
<li>
<p>基本类型</p>
<ul>
<li>undefined</li>
<li>null</li>
<li>Number</li>
<li>String</li>
<li>Boolean</li>
</ul>
</li>
<li>
<p>复杂类型</p>
<ul><li>Object</li></ul>
</li>
</ul>
<h3 id="articleHeader4">js变量按照存储方式区分，有哪些类型，并表述其特点</h3>
<ul>
<li>
<p>值类型：</p>
<ul>
<li>undefined string number Boolean</li>
<li>拷贝形式,</li>
</ul>
</li>
<li>
<p>引用类型：</p>
<ul>
<li>array , function</li>
<li>指针指向，共用空间</li>
<li>可无限扩展属性，极大节省命名空间。</li>
</ul>
</li>
<li>
<p>特殊引用类型：function</p>
<ul>
<li>同引用类型↑</li>
<li>特殊引用类型只有function，由于function的特殊性，使得它有点不同</li>
</ul>
</li>
</ul>
<h3 id="articleHeader5">JS中的typeof能得到的那些类型？ 6种</h3>
<ul>
<li>number</li>
<li>string</li>
<li>undefined</li>
<li>object :  null和数组 都是object</li>
<li>function</li>
<li>boolean</li>
</ul>
<p>注意：typeof无法详细区分引用类型的类型，除了function. 只能准确区分值类型的类型<br>比如：</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" typeof {} //object
 typeof [] //object
 typeof null //object
 typeof console.log // function " title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs typescript"><code> <span class="hljs-keyword">typeof</span> {} <span class="hljs-comment">//object</span>
 <span class="hljs-keyword">typeof</span> [] <span class="hljs-comment">//object</span>
 <span class="hljs-keyword">typeof</span> <span class="hljs-literal">null</span> <span class="hljs-comment">//object</span>
 <span class="hljs-keyword">typeof</span> <span class="hljs-built_in">console</span>.log <span class="hljs-comment">// function </span></code></pre>
<p>function是一个比较特殊的类型，所以typeof能够区分</p>
<h3 id="articleHeader6">何时使用===何时使用==？</h3>
<ul>
<li>
<p>尽可能使用 === 原因如下</p>
<ul>
<li>一致性:使用 ==对一致性没有任何好处，所以提前避免</li>
<li>一般来说,===是最简单的操作符，因为它不用类型转换，所以相对来说，速度也会更快。</li>
<li>== 会进行类型转换，很容易懵逼</li>
</ul>
</li>
<li>
<p>== 的使用情况,可参考</p>
<ul><li>判断对象的属性是否存在</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="    var obj = {};
    if( obj.a == null ){
        //这里相对于：obj.a === null || obj.a === undefined 的简写形式，JQ源码的推荐写法
    }" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs scala"><code>    <span class="hljs-keyword">var</span> obj = {};
    <span class="hljs-keyword">if</span>( obj.a == <span class="hljs-literal">null</span> ){
        <span class="hljs-comment">//这里相对于：obj.a === null || obj.a === undefined 的简写形式，JQ源码的推荐写法</span>
    }</code></pre>
<ul><li>判断函数的参数是否存在</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="    function fn( a, b){
        if( b == null ){
            //这里相当于 b===null || b === undefined 的简写
        }
    }" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs actionscript"><code>    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span><span class="hljs-params">( a, b)</span></span>{
        <span class="hljs-keyword">if</span>( b == <span class="hljs-literal">null</span> ){
            <span class="hljs-comment">//这里相当于 b===null || b === undefined 的简写</span>
        }
    }</code></pre>
</li>
</ul>
<h3 id="articleHeader7">如何理解JSON？</h3>
<ul>
<li>
<p>从纯JS的角度看，JSON就是对象，并且只有两个API</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="   JSON.stringify({a:10,b:30}) //将对象转为字符串
   JSON.parse('{&quot;a&quot;:10,&quot;b&quot;:30}') //将JSON格式的字符串转为 对象" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs typescript"><code>   <span class="hljs-built_in">JSON</span>.stringify({a:<span class="hljs-number">10</span>,b:<span class="hljs-number">30</span>}) <span class="hljs-comment">//将对象转为字符串</span>
   <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-string">'{"a":10,"b":30}'</span>) <span class="hljs-comment">//将JSON格式的字符串转为 对象</span></code></pre>
</li>
<li>JSON也是一种轻量级的文本数据交换格式.</li>
</ul>
<h3 id="articleHeader8">js中有哪些内置函数 9 种</h3>
<ul>
<li>Object</li>
<li>Array</li>
<li>Boolean</li>
<li>Number</li>
<li>String</li>
<li>Function</li>
<li>Date</li>
<li>RegExp</li>
<li>Error</li>
</ul>
<h3 id="articleHeader9">判断一个变量会被当做 true 还是 false</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var a = 100; console.log( !!a ); //true" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs typescript"><code style="word-break: break-word; white-space: initial;"><span class="hljs-keyword">var</span> a = <span class="hljs-number">100</span>; <span class="hljs-built_in">console</span>.log( !!a ); <span class="hljs-comment">//true</span></code></pre>
<h3 id="articleHeader10">window.onload和DOMContentLoaded的区别？</h3>
<ul>
<li>window.onload: 页面中所有数据加载完成后，才会执行，包括图片，css等</li>
<li>DOMContentLoaded: DOM结构加载完成后执行，需要等待图片等其他资源加载完成</li>
</ul>
<h3 id="articleHeader11">简述如何实现一个模块加载器，实现类似requires.js的基本功能</h3>
<p>可参看这篇博文：<a href="https://github.com/youngwind/blog/issues/98" rel="nofollow noreferrer" target="_blank">https://github.com/youngwind/...</a></p>
<h3 id="articleHeader12">实现数组的随机排序</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" //该方法最简单，效果一般，每个元素仍然有很大机率在它原来的位置附近出现
 arr.sort(function () {
      return Math.random() - 0.5;
   });
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs lua"><code> //该方法最简单，效果一般，每个元素仍然有很大机率在它原来的位置附近出现
 arr.<span class="hljs-built_in">sort</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span></span> {
      <span class="hljs-keyword">return</span> Math.<span class="hljs-built_in">random</span>() - <span class="hljs-number">0.5</span>;
   });
</code></pre>
<p>//Fisher–Yates shuffle费雪耶兹随机置乱算法) ！！！推荐</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="
    //算法思想：从0~i（i的变化为 n-1到0递减）中随机取得一个下标，和最后一个元素（i）交换。
   var arr = [5,8,59,56];
   function shuffle(arr) {
    var i = arr.length, t, j;
    while (i)
    {
        j = Math.floor(Math.random() * i--);
        t= arr[i];
        arr[i] = arr[j];
        arr[j]= t;
    }
}
shuffle(arr)
console.log(arr);//[56, 8, 5, 59]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code>
    <span class="hljs-comment">//算法思想：从0~i（i的变化为 n-1到0递减）中随机取得一个下标，和最后一个元素（i）交换。</span>
   <span class="hljs-keyword">var</span> arr = [<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">59</span>,<span class="hljs-number">56</span>];
   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">shuffle</span>(<span class="hljs-params">arr</span>) </span>{
    <span class="hljs-keyword">var</span> i = arr.length, t, j;
    <span class="hljs-keyword">while</span> (i)
    {
        j = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * i--);
        t= arr[i];
        arr[i] = arr[j];
        arr[j]= t;
    }
}
shuffle(arr)
<span class="hljs-built_in">console</span>.log(arr);<span class="hljs-comment">//[56, 8, 5, 59]</span></code></pre>
<h1 id="articleHeader13">原型和原型链</h1>
<h3 id="articleHeader14">什么叫原型链</h3>
<p>原型链是针对构造函数的，比如我创建了一个函数并通过变量new了一个函数，那这个函数就会继承创建处理函数的属性，如果访问这个函数的属性时，并没有在new处理的变量中写该属性，那么就会往上,根据protype逐级向上查找，这个查找的过程就叫原型链。</p>
<h3 id="articleHeader15">原型规则</h3>
<ol>
<li>所有的引用类型（数组，对象，函数），都具有对象的特殊，即可自由扩展属性（除了Null，纯属意外）</li>
<li>所有的引用类型（数组，对象，函数），都有一个__proto__属性，也可以称为隐式原型，属性值是一个普通的对象</li>
<li>所有的函数，都有一个prototype属性，也可称之为显式原型，属性值是一个普通的对象</li>
<li>所有的引用类型（数组，对象，函数），__proto__属性值指向它的构造函数的prototype属性值</li>
<li>当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__中去找。</li>
</ol>
<p>由于它的隐式原型等于它的显式原型，所以也会去 prototype 中去找。</p>
<h3 id="articleHeader16">构造函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" function Foo(name,age){
    this.name = name;
    this.age = age;
}
var foo = new Foo('h1',25);
var foo2 = new Foo('h1',250);
console.log(foo,foo2);

//循环对象自身的属性
var item;
for( item in foo)
{
    //只遍历对象自身的属性，过滤掉该对象的显式原型
    if(foo.hasOwnProperty(item))
    {
        console.log(item)
    }

}
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Foo</span>(<span class="hljs-params">name,age</span>)</span>{
    <span class="hljs-keyword">this</span>.name = name;
    <span class="hljs-keyword">this</span>.age = age;
}
<span class="hljs-keyword">var</span> foo = <span class="hljs-keyword">new</span> Foo(<span class="hljs-string">'h1'</span>,<span class="hljs-number">25</span>);
<span class="hljs-keyword">var</span> foo2 = <span class="hljs-keyword">new</span> Foo(<span class="hljs-string">'h1'</span>,<span class="hljs-number">250</span>);
<span class="hljs-built_in">console</span>.log(foo,foo2);

<span class="hljs-comment">//循环对象自身的属性</span>
<span class="hljs-keyword">var</span> item;
<span class="hljs-keyword">for</span>( item <span class="hljs-keyword">in</span> foo)
{
    <span class="hljs-comment">//只遍历对象自身的属性，过滤掉该对象的显式原型</span>
    <span class="hljs-keyword">if</span>(foo.hasOwnProperty(item))
    {
        <span class="hljs-built_in">console</span>.log(item)
    }

}
</code></pre>
<h3 id="articleHeader17">描述new一个对象的过程</h3>
<ol>
<li>创建一个对象</li>
<li>this指向这个新对象</li>
<li>执行代码，即对this赋值</li>
<li>return this。 默认有return，不用写</li>
</ol>
<h3 id="articleHeader18">如何判断一个变量是数组类型</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var arr = [1,2,3];
console.log(Array.isArray(arr)); //true

//instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
console.log( arr instanceof Array) //true" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs typescript"><code><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>];
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Array</span>.isArray(arr)); <span class="hljs-comment">//true</span>

<span class="hljs-comment">//instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置</span>
<span class="hljs-built_in">console</span>.log( arr <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Array</span>) <span class="hljs-comment">//true</span></code></pre>
<h3 id="articleHeader19">写一个原型继承的例子</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" function Elem(id){
    this.dom = document.getElementById(id);
}

Elem.prototype.html = function(val){
    var dom = this.dom;
    if(val){
        dom.innerHTML = val;
        return this; //用来链式调用
    }else{
        return dom.innerHTML;

    }
}

Elem.prototype.on = function(type ,fn){
    var dom = this.dom;
    dom.addEventListener( type , fn);

}
var h1 = new Elem('h1');
h1.html(&quot;你被修改了&quot;).on('click', function(){
    console.log(this)
})
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Elem</span>(<span class="hljs-params">id</span>)</span>{
    <span class="hljs-keyword">this</span>.dom = <span class="hljs-built_in">document</span>.getElementById(id);
}

Elem.prototype.html = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">val</span>)</span>{
    <span class="hljs-keyword">var</span> dom = <span class="hljs-keyword">this</span>.dom;
    <span class="hljs-keyword">if</span>(val){
        dom.innerHTML = val;
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>; <span class="hljs-comment">//用来链式调用</span>
    }<span class="hljs-keyword">else</span>{
        <span class="hljs-keyword">return</span> dom.innerHTML;

    }
}

Elem.prototype.on = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">type ,fn</span>)</span>{
    <span class="hljs-keyword">var</span> dom = <span class="hljs-keyword">this</span>.dom;
    dom.addEventListener( type , fn);

}
<span class="hljs-keyword">var</span> h1 = <span class="hljs-keyword">new</span> Elem(<span class="hljs-string">'h1'</span>);
h1.html(<span class="hljs-string">"你被修改了"</span>).on(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
})
</code></pre>
<h1 id="articleHeader20">作用域和闭包</h1>
<h3 id="articleHeader21">什么叫作用域？</h3>
<p>`作用域是针对变量的，比如我创建了一个函数，这个函数中包含了另外一个函数。那么该变量中就有3个作用域<br>全局作用域》函数作用域》内层函数的作用域<br>作用域的特点就是，先在自己的变量范围中查找，如果找不到，就会沿着作用域往上找。<br>`</p>
<h3 id="articleHeader22">变量提升的理解</h3>
<ul>
<li>变量定义</li>
<li>函数声明（注意和函数表达式的区别）</li>
<li>预解析</li>
</ul>
<h3 id="articleHeader23">this的使用场景</h3>
<p>注意：this要在执行时才能确认值，定义时无法确认</p>
<ul>
<li>作为构造函数执行</li>
<li>作为对象属性执行</li>
<li>作为普通函数执行</li>
<li>call apply bind</li>
</ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" function f1(name,age){
    console.log(name,age)
    console.log(this); //this为x对象
 }

f1.apply({x:'我是this'}, [&quot;seek&quot;,20]);
f1.call({x:'我是this'}, &quot;seek&quot;,20);


//使用bind改变this时，需用函数表达式
var f1 = function (name,age){
    console.log(name,age)
    console.log(this); //this为x对象
}.bind('我是被绑定的this')

f1(&quot;seek&quot;,20)
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params">name,age</span>)</span>{
    <span class="hljs-built_in">console</span>.log(name,age)
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>); <span class="hljs-comment">//this为x对象</span>
 }

f1.apply({<span class="hljs-attr">x</span>:<span class="hljs-string">'我是this'</span>}, [<span class="hljs-string">"seek"</span>,<span class="hljs-number">20</span>]);
f1.call({<span class="hljs-attr">x</span>:<span class="hljs-string">'我是this'</span>}, <span class="hljs-string">"seek"</span>,<span class="hljs-number">20</span>);


<span class="hljs-comment">//使用bind改变this时，需用函数表达式</span>
<span class="hljs-keyword">var</span> f1 = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">name,age</span>)</span>{
    <span class="hljs-built_in">console</span>.log(name,age)
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>); <span class="hljs-comment">//this为x对象</span>
}.bind(<span class="hljs-string">'我是被绑定的this'</span>)

f1(<span class="hljs-string">"seek"</span>,<span class="hljs-number">20</span>)
</code></pre>
<h3 id="articleHeader24">闭包</h3>
<p>`当一个函数的返回值是另外一个函数，而返回的那个函数如果调用了其父函数内部的其它变量，<br>如果返回的这个函数在外部被执行，就产生了闭包。<br>表现形式：使函数外部能够调用函数内部定义的变量。`</p>
<ul><li>
<p>闭包的使用场景</p>
<ol>
<li>
<p>函数作为返回值</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" function fn(){
    var a = 10;
    return function(){
        console.log(a); //a是自由变量，从父作用域开始找。
    }
}
var f1 =  fn();
var a = 20;
f1(); //10" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">var</span> a = <span class="hljs-number">10</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
        <span class="hljs-built_in">console</span>.log(a); <span class="hljs-comment">//a是自由变量，从父作用域开始找。</span>
    }
}
<span class="hljs-keyword">var</span> f1 =  fn();
<span class="hljs-keyword">var</span> a = <span class="hljs-number">20</span>;
f1(); <span class="hljs-comment">//10</span></code></pre>
</li>
<li>
<p>函数作为参数来传递</p>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="function fn(){
    var a = 10;
    return function(){
        console.log(a);
        }
}
var fn1 = fn();

function fn2(fn){
    var a =20;
    fn();
}
fn2(fn1); //10" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">var</span> a = <span class="hljs-number">10</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
        <span class="hljs-built_in">console</span>.log(a);
        }
}
<span class="hljs-keyword">var</span> fn1 = fn();

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn2</span>(<span class="hljs-params">fn</span>)</span>{
    <span class="hljs-keyword">var</span> a =<span class="hljs-number">20</span>;
    fn();
}
fn2(fn1); <span class="hljs-comment">//10</span></code></pre>
</li>
</ol>
</li></ul>
<h3 id="articleHeader25">如何理解作用域？</h3>
<ul>
<li>自由变量</li>
<li>作用域链，即自由变量的查找</li>
<li>闭包的两个场景</li>
</ul>
<h3 id="articleHeader26">JS创建10个a标签，点击时弹出对应的序号 （考点：作用域)</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var str,a;
for( a=0; a<10;a++){
    str = document.createElement(&quot;a&quot;);
    str.innerHTML = a + &quot;点我&quot; + &quot;<br/>&quot;;

    document.body.appendChild(str);

    (function(a){
        str.addEventListener(&quot;click&quot;,function(e){
            e.preventDefault();
            console.log(a)
        })
    })(a)
}" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code><span class="hljs-keyword">var</span> str,a;
<span class="hljs-keyword">for</span>( a=<span class="hljs-number">0</span>; a&lt;<span class="hljs-number">10</span>;a++){
    str = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"a"</span>);
    str.innerHTML = a + <span class="hljs-string">"点我"</span> + <span class="hljs-string">"&lt;br/&gt;"</span>;

    <span class="hljs-built_in">document</span>.body.appendChild(str);

    (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a</span>)</span>{
        str.addEventListener(<span class="hljs-string">"click"</span>,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{
            e.preventDefault();
            <span class="hljs-built_in">console</span>.log(a)
        })
    })(a)
}</code></pre>
<h3 id="articleHeader27">什么叫异步,什么叫同步？</h3>
<p>同步是阻塞模式，异步是非阻塞模式。</p>
<ul>
<li>异步：不需要等操作做完，就响应用户请求. 比如：ajax，img的加载，setTimeout,setInterval</li>
<li>同步：必须等待操作做完，才返回结果.</li>
</ul>
<h3 id="articleHeader28">数组API</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" var arr= [2,3,9,0];" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs scala"><code style="word-break: break-word; white-space: initial;"> <span class="hljs-keyword">var</span> arr= [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">9</span>,<span class="hljs-number">0</span>];</code></pre>
<ul><li>forEach 遍历所有元素</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="  arr.forEach(function(item,index){
        console.log(item) // 2390
        console.log(index) //0123

    })" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code>  arr.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item,index</span>)</span>{
        <span class="hljs-built_in">console</span>.log(item) <span class="hljs-comment">// 2390</span>
        <span class="hljs-built_in">console</span>.log(index) <span class="hljs-comment">//0123</span>

    })</code></pre>
<ul><li>every 判断所有元素是否都符合条件</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="  var result = arr.every(function(item,index){
        if(item < 4)
        {
          return true;
        }
    })
  console.log(result); //false， 因为9并不小于4" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code>  <span class="hljs-keyword">var</span> result = arr.every(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item,index</span>)</span>{
        <span class="hljs-keyword">if</span>(item &lt; <span class="hljs-number">4</span>)
        {
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        }
    })
  <span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">//false， 因为9并不小于4</span></code></pre>
<ul><li>some 判断是否有至少一个元素符合条件</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" var result =  arr.some(function(item,index){
        if(item < 4)
        {
          return true;
        }
      })
console.log(result); //true 因为2,3,0小于4" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-keyword">var</span> result =  arr.some(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item,index</span>)</span>{
        <span class="hljs-keyword">if</span>(item &lt; <span class="hljs-number">4</span>)
        {
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        }
      })
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">//true 因为2,3,0小于4</span></code></pre>
<ul><li>sort 排序</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" var result =  arr.sort(function(a,b){
          // return a-b; //正序
          return b-a; // 倒序
        // return return Math.random() - 0.5; //最简单的随机数组排序，并不推荐

      })
console.log(result); // &nbsp;[9, 3, 2, 0]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-keyword">var</span> result =  arr.sort(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a,b</span>)</span>{
          <span class="hljs-comment">// return a-b; //正序</span>
          <span class="hljs-keyword">return</span> b-a; <span class="hljs-comment">// 倒序</span>
        <span class="hljs-comment">// return return Math.random() - 0.5; //最简单的随机数组排序，并不推荐</span>

      })
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// &nbsp;[9, 3, 2, 0]</span></code></pre>
<ul><li>map 对元素重新组装，生成新数组</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//map适用范围还是较广的，学会思考
 var result =  arr.map(function(item,index){
            return '<h1>' + item + '</h1>';
      })
console.log(result);   //  [&quot;<h1>2</h1>&quot;, &quot;<h1>3</h1>&quot;, &quot;<h1>9</h1>&quot;, &quot;<h1>0</h1>&quot;]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs lua"><code>//map适用范围还是较广的，学会思考
 var result =  arr.map(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(item,index)</span></span>{
            <span class="hljs-keyword">return</span> <span class="hljs-string">'&lt;h1&gt;'</span> + item + <span class="hljs-string">'&lt;/h1&gt;'</span>;
      })
console.<span class="hljs-built_in">log</span>(result);   //  [<span class="hljs-string">"&lt;h1&gt;2&lt;/h1&gt;"</span>, <span class="hljs-string">"&lt;h1&gt;3&lt;/h1&gt;"</span>, <span class="hljs-string">"&lt;h1&gt;9&lt;/h1&gt;"</span>, <span class="hljs-string">"&lt;h1&gt;0&lt;/h1&gt;"</span>]</code></pre>
<ul><li>filter 过滤符合条件的元素,较为常用</li></ul>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var result =  arr.filter(function(item,index){
            if(item >=3){
              return true;
            }
      })
console.log(result);   // [3, 9]" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code><span class="hljs-keyword">var</span> result =  arr.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item,index</span>)</span>{
            <span class="hljs-keyword">if</span>(item &gt;=<span class="hljs-number">3</span>){
              <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
            }
      })
<span class="hljs-built_in">console</span>.log(result);   <span class="hljs-comment">// [3, 9]</span></code></pre>
<h3 id="articleHeader29">获取 2019-03-23格式的日期</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="   function formatDate(dt) {
        if (!dt) {
            //如果不传参数，则默认为当前时间
            dt = new Date();
        }

        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var day = dt.getDate();

        if (month <= 10) {
            month = '0' + month;
        }

        if (day <= 10) {
            day = '0' + day;
        }

        return year + '-' + month + '-' + day;
    }

    var date = formatDate();
    console.log(date); //2019-03-23
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code>   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">formatDate</span>(<span class="hljs-params">dt</span>) </span>{
        <span class="hljs-keyword">if</span> (!dt) {
            <span class="hljs-comment">//如果不传参数，则默认为当前时间</span>
            dt = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
        }

        <span class="hljs-keyword">var</span> year = dt.getFullYear();
        <span class="hljs-keyword">var</span> month = dt.getMonth() + <span class="hljs-number">1</span>;
        <span class="hljs-keyword">var</span> day = dt.getDate();

        <span class="hljs-keyword">if</span> (month &lt;= <span class="hljs-number">10</span>) {
            month = <span class="hljs-string">'0'</span> + month;
        }

        <span class="hljs-keyword">if</span> (day &lt;= <span class="hljs-number">10</span>) {
            day = <span class="hljs-string">'0'</span> + day;
        }

        <span class="hljs-keyword">return</span> year + <span class="hljs-string">'-'</span> + month + <span class="hljs-string">'-'</span> + day;
    }

    <span class="hljs-keyword">var</span> date = formatDate();
    <span class="hljs-built_in">console</span>.log(date); <span class="hljs-comment">//2019-03-23</span>
</code></pre>
<h3 id="articleHeader30">获取随机数，要求长度一致的字符串格式</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" var random = Math.random();
    random = random + '0'.repeat(10); //repeat 重复10个0, 防止随机数出现少于10位数的情况
    random = random.slice(0,10)
    console.log(random); //0.70728618  每次返回的只有10位数的字符串" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs lua"><code> var <span class="hljs-built_in">random</span> = Math.<span class="hljs-built_in">random</span>();
    <span class="hljs-built_in">random</span> = <span class="hljs-built_in">random</span> + <span class="hljs-string">'0'</span>.<span class="hljs-keyword">repeat</span>(<span class="hljs-number">10</span>); //<span class="hljs-keyword">repeat</span> 重复<span class="hljs-number">10</span>个<span class="hljs-number">0</span>, 防止随机数出现少于<span class="hljs-number">10</span>位数的情况
    <span class="hljs-built_in">random</span> = <span class="hljs-built_in">random</span>.slice(<span class="hljs-number">0</span>,<span class="hljs-number">10</span>)
    console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">random</span>); //<span class="hljs-number">0.70728618</span>  每次返回的只有<span class="hljs-number">10</span>位数的字符串</code></pre>
<h3 id="articleHeader31">写一个能遍历对象和数组的foreach函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="function foreach(info, fn)
{
        //数组处理
        if(info instanceof Array)
        {
          info.forEach(fn)
        }else{
           //对象处理
           for( key in obj){
              fn(key, obj[key])
            }
        }

}

//使用方法
  var obj = {x: '我是x',y: '我是y'};
   foreach(obj, function(key,value){
    console.log(value); //我是x,我是y
  })


  var arr = [5,8,9];
  foreach(arr, function(elem,index){
    console.log(elem);//5,8,9
  })
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foreach</span>(<span class="hljs-params">info, fn</span>)
</span>{
        <span class="hljs-comment">//数组处理</span>
        <span class="hljs-keyword">if</span>(info <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Array</span>)
        {
          info.forEach(fn)
        }<span class="hljs-keyword">else</span>{
           <span class="hljs-comment">//对象处理</span>
           <span class="hljs-keyword">for</span>( key <span class="hljs-keyword">in</span> obj){
              fn(key, obj[key])
            }
        }

}

<span class="hljs-comment">//使用方法</span>
  <span class="hljs-keyword">var</span> obj = {<span class="hljs-attr">x</span>: <span class="hljs-string">'我是x'</span>,<span class="hljs-attr">y</span>: <span class="hljs-string">'我是y'</span>};
   foreach(obj, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">key,value</span>)</span>{
    <span class="hljs-built_in">console</span>.log(value); <span class="hljs-comment">//我是x,我是y</span>
  })


  <span class="hljs-keyword">var</span> arr = [<span class="hljs-number">5</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>];
  foreach(arr, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">elem,index</span>)</span>{
    <span class="hljs-built_in">console</span>.log(elem);<span class="hljs-comment">//5,8,9</span>
  })
</code></pre>
<h1 id="articleHeader32">Web_API</h1>
<h3 id="articleHeader33">编写一个通用的事件监听函数</h3>
<div class="widget-codetool" style="display: none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text=" function bindEvent(elem,type,fn){
           elem.addEventListener( type ,fn)
 }
 //使用方法
 bindEvent(id,'click', function(e){
    console.log(e)
 })

 bindEvent(a,'click', function(e){
    e.preventDefault(); //阻止默认事件
 })" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs javascript"><code> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bindEvent</span>(<span class="hljs-params">elem,type,fn</span>)</span>{
           elem.addEventListener( type ,fn)
 }
 <span class="hljs-comment">//使用方法</span>
 bindEvent(id,<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{
    <span class="hljs-built_in">console</span>.log(e)
 })

 bindEvent(a,<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{
    e.preventDefault(); <span class="hljs-comment">//阻止默认事件</span>
 })</code></pre>
<h3 id="articleHeader34">对于一个无限加载流的页面，如何给每个特定的标签添加事件</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//使用代理，由父级帮忙去做

 <div id=&quot;div1&quot;>
    <a href=&quot;#&quot;>a1</a>
    <a href=&quot;#&quot;>a2</a>
    <span>ddd</span>
    <a href=&quot;#&quot;>a5</a>
    <!-- 动态加载更多 -->
</div>

div1.addEventListener('click', function(e){
    if (e.target.nodeName == &quot;A&quot;){
        alert(e.target.innerHTML)
    }
})" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs xml"><code>//使用代理，由父级帮忙去做

 <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"div1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>a1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>a2<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>ddd<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>a5<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 动态加载更多 --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

div1.addEventListener('click', function(e){
    if (e.target.nodeName == "A"){
        alert(e.target.innerHTML)
    }
})</code></pre>
<h3 id="articleHeader35">完善通用绑定事件的函数，包括代理</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="//HTML结构
 <div id=&quot;div1&quot;>
    <a href=&quot;#&quot;>a1</a>
    <a href=&quot;#&quot;>a2</a>
    <span>ddd</span>
    <a href=&quot;#&quot;>a5</a>
    <!-- 动态加载更多 -->
</div>

<div id=&quot;div2&quot;>不使用代理</div>

//
function bindEvent(elem,type,selector, fn){
    if(fn == null){
        fn=selector;
        selector =null;
    }
    elem.addEventListener( type ,function(e){
        var target;
        if(selector){
            target = e.target;
            //matches() 方法用于检测字符串是否匹配给定的正则表达式。
            if(target.matches(selector)){
                fn.call(target,e);
            }
        }else{
            fn.call(e);
        }
    })
}

//使用代理
bindEvent(div1,'click','a',function(e){
    console.log(this)
})
//不使用代理
bindEvent(div2,'click',function(e){
    //call改变了this指向为e
    console.log(this.toElement.innerHTML)
})
" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs actionscript"><code><span class="hljs-comment">//HTML结构</span>
 &lt;div id=<span class="hljs-string">"div1"</span>&gt;
    &lt;a href=<span class="hljs-string">"#"</span>&gt;a1&lt;/a&gt;
    &lt;a href=<span class="hljs-string">"#"</span>&gt;a2&lt;/a&gt;
    &lt;span&gt;ddd&lt;/span&gt;
    &lt;a href=<span class="hljs-string">"#"</span>&gt;a5&lt;/a&gt;
    &lt;!-- 动态加载更多 --&gt;
&lt;/div&gt;

&lt;div id=<span class="hljs-string">"div2"</span>&gt;不使用代理&lt;/div&gt;

<span class="hljs-comment">//</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bindEvent</span><span class="hljs-params">(elem,type,selector, fn)</span></span>{
    <span class="hljs-keyword">if</span>(fn == <span class="hljs-literal">null</span>){
        fn=selector;
        selector =<span class="hljs-literal">null</span>;
    }
    elem.addEventListener( type ,<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span></span>{
        <span class="hljs-keyword">var</span> target;
        <span class="hljs-keyword">if</span>(selector){
            target = e.target;
            <span class="hljs-comment">//matches() 方法用于检测字符串是否匹配给定的正则表达式。</span>
            <span class="hljs-keyword">if</span>(target.matches(selector)){
                fn.call(target,e);
            }
        }<span class="hljs-keyword">else</span>{
            fn.call(e);
        }
    })
}

<span class="hljs-comment">//使用代理</span>
bindEvent(div1,<span class="hljs-string">'click'</span>,<span class="hljs-string">'a'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span></span>{
    console.log(<span class="hljs-keyword">this</span>)
})
<span class="hljs-comment">//不使用代理</span>
bindEvent(div2,<span class="hljs-string">'click'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span></span>{
    <span class="hljs-comment">//call改变了this指向为e</span>
    console.log(<span class="hljs-keyword">this</span>.toElement.innerHTML)
})
</code></pre>
<h3 id="articleHeader36">可以跨域的三个标签</h3>
<div class="widget-codetool" style="display:none;">
      <div class="widget-codetool--inner">
      <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
      <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="<img src=&quot;&quot; alt=&quot;&quot;> //用于打点统计
<link rel=&quot;stylesheet&quot; href=&quot;&quot;> //使用CDN
<script></script> // 使用JSONP" title="" data-original-title="复制"></span>
      </div>
      </div><pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">""</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span>&gt;</span> //用于打点统计
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span> //使用CDN
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span> // 使用JSONP</code></pre>
<h1 id="articleHeader37">3月10日面试</h1>
<h3 id="articleHeader38">闭包的优缺点</h3>
<p>JS中，在函数外部无法访问函数内部的值，使用闭包就可以做到。</p>
<ul>
<li>
<p>优点：</p>
<ol>
<li>使用闭包能够让局部变量模拟全局变量一样,但是，只能被特定函数调用。</li>
<li>全局变量可能会造成命名冲突，使用闭包不用担心这个问题，因为它是私有化，加强了封装性。</li>
</ol>
</li>
<li>
<p>缺点</p>
<ol><li>由于闭包是驻留在内存中的,会增大内存使用量，使用不当很容易造成内存泄露,降低程序的性能。</li></ol>
</li>
</ul>
<h3 id="articleHeader39">按需引入，模块引入的实现？</h3>
<h3 id="articleHeader40">http请求缓存头详解</h3>
<ol>
<li>Expires: http1.0 推出的，指服务器返回的文件有效期，但其实这是有缺陷的，如果把本地的时间改为2118年，那Expires的时间怎么都会过期。</li>
<li>Last-Modified: http1.0推出的，指服务器文件的最后修改时间，浏览器会带上If-Modified-Since向服务器发送请求，与服务器文件修改时间Last-Modified做对比，如果时间不同，则获取数据返回200，否则返回304后调用浏览器本地硬盘的缓存。</li>
<li>
<p>Cache-Control: http1.1推出，指文件缓存的有效期。</p>
<ul>
<li>.max-age:单位是s，设置文件最大缓存时间，用得最多。</li>
<li>public:缓存可以被多用户共享，例如360浏览器可以登录不同账号，电脑系统可以切换不同账号</li>
<li>private:仅单用户私有，不被多用户共享</li>
<li>no-cache:不会被缓存。</li>
<li>no-store:不允许被存储</li>
</ul>
</li>
<li>ETag: http1.1推出，该版本号是由服务端随机生成的，浏览器会带上If-None-Match向服务器发送请求，与服务器文件修改版本ETag做对比，如果版本号不同，则获取数据返回200，否则返回304后调用浏览器本地硬盘的缓存，这种方式比Last-Modified靠谱。</li>
</ol>

</div>


尊重原著:文章转载于@[史燕斌](https://segmentfault.com/a/1190000018628100).
