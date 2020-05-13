---
title: CSS垂直居中的几种方法
tags: CSS
categories: 编程
---
CSS垂直居中的几种方法






@[TOC](CSS垂直居中的几种方法)

### 假设HTML如下:
```html
<body>
    <div id="box">
        <div id="content"></div>
    </div>
</body>

```
### 1. 兼容性最好的方法 IE7以上

```javascript
body,html { margin:0; width:100%; height:100%; }

#box {
	 width:100%;
	 height:100%;
	 background:rgba(0,0,0,0.7);
	 position:relative;
 }
#content {
	width:50%;
	height:50%;
	background:pink;
	position:absolute;
	top:0;
	right:0;
	bottom:0;
	left:0;
	margin:auto;
}
```

### 2. transform进行元素偏移 IE8以上

```javascript
body,html { margin:0; width:100%; height:100%; }

#box {
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.7);
	position:relative;
}
#content{
	position:absolute;
	width:50%;
	height:50%;
	background:blue;
	left:50%;
	top:50%;
	transform:translateX(-50%) translateY(-50%);
	-webkit-transform:translateX(-50%) translateY(-50%);
}
```

### 3. 弹性盒模型进行布局 IE兼容性差

```javascript
body,html { margin:0; width:100%; height:100%; }

#box {
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.7);
	display:box;
	box-pack:center;
	box-align:center;
	display:-webkit-flexbox;
	-webkit-box-pack:center;
	-webkit-box-align:center;
}
#content {
	width:50%;
	height:50%;
	background:blue;
}
```


### 4. flex布局 不兼容IE9以下

```javascript
body,html { margin:0; width:100%; height:100%; }

#box {
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.7);
	display:flex;
	display:-webkit-flex;
	 justify-content:center;
	 align-items:center;
  }
#content {
	position:absolute;
	width:50%;
	height:50%;
	background:blue;
  }
```


##### 言: 以上就是博主目前用的比较多的方法啦，如果有什么更好的方法，可以多多交流喔
