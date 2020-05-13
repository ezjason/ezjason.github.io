---
title: vue中watch不触发、不生效的解决办法及原理
tags: Vue
categories: 编程
---
vue中watch不触发、不生效的解决办法及原理
@[TOC](vue中watch不触发、不生效的解决办法及原理)

## 遇到的问题

vue中watch不触发、不生效的解决办法及原理


@[TOC](vue中watch不触发、不生效的解决办法及原理)

## 遇到的问题
 在深层props过程中，props的数据传到了目标文件 但却没有触发数据更新及页面更新；
 watch代码如下：
```javascript
  watch: {
  uploaConfig(newVal,oldVal){
   if (this.uploadConfig.moreList && this.uploadConfig.moreList.length > 0) {
      	this.moreList = newVal.moreList
      	}
  	}
  },
```

vue-devToola数据传递结果如下
![在这里插入图片描述](https://user-gold-cdn.xitu.io/2019/6/28/16b99b3a392f85cf?w=622&h=737&f=png&s=95782)
#### 方案解决过程一
考虑到使用了对象传递 watch可能无法检测到深层key属性变化，代码改成如下:
```javascript
 watch: {
	 'uploaConfig.moreList': {
	      handler (newVal) {
	      if (this.uploadConfig.moreList && this.uploadConfig.moreList.length > 0) {
	      	this.moreList = newVal.moreList
	      	}
	      },
	      deep: true
	    }
  	},
```

结果显而易见 还是不行；

#### 方案解决过程二
查阅: [vue官方文档](https://cn.vuejs.org/v2/api/#watch).得知如果是想watch检测到值变化并且立刻使用则需要加上 immediate: true,
```javascript
watch: {
	    'uploaConfig.moreList': {
	      handler (newVal) {
	      if (this.uploadConfig.moreList && this.uploadConfig.moreList.length > 0) {
	      	this.moreList = newVal.moreList
	      	}
	      },
	      deep: true,
	      immediate: true,
	    }
    }
```
最后博主问题终于得到解决了
![在这里插入图片描述](https://user-gold-cdn.xitu.io/2019/6/28/16b99b3a4443d1f4?w=573&h=608&f=png&s=79337)

## 总结:
出现问题尽量先找官网 首先确定是自己没有了解到官方api的正确使用或者是一些特定解决方案，如若对您有帮助，麻烦点个赞吧~
> 20190626更新 | 原文并没有解释清楚为何加上 deep: true或者 immediate: true就可以了，此次更新将加入demo

## 更新内容
### 1 常规的监听(watch)
```javascript
<div class="watch-demo">
    <div class="watch-demo-item">
      <input type="text" v-model="val1">
      <div>{{value1}}</div>
    </div>
  </div>
// ...
data () {
    return {
      val1: '',
      value1: ''
    }
  },
  watch: {
    val1 (val, oval) {
      this.value1 = val
    }
  },
  methods: {
  }
```
输出:
![常规监听](https://user-gold-cdn.xitu.io/2019/6/28/16b99b399f2c62a0?w=990&h=488&f=png&s=1959)

* 从上图可以看出，常规的监听和我们想象中的完全一致，理想和实际完美吻合；

### 2 对象监听
```javascript
 <div class="watch-demo-item">
      <input type="text" v-model="obj.val2">
      <div>{{value2}}</div>
    </div>
// ...

data () {
    return {
      val1: '',
      value1: '',
      obj: {
        val2: ''
      },
      value2: ''
    }
  },
  watch: {
    val1 (val, oval) {
      this.value1 = val
    },
    obj (val, oval) {
      this.value2 = val.val2
    }
  },
  methods: {
  }
```

输出结果:
![对象监听](https://user-gold-cdn.xitu.io/2019/6/28/16b99b3990bb0cce?w=1240&h=1040&f=png&s=4873)

* 咦 为何刚才没问题，对象就有问题呢

**方法一: 代码调整如下:**

```javascript
 data () {
    return {
      val1: '',
      value1: '',
      obj: {
        val2: ''
      },
      value2: ''
    }
  },
  watch: {
    val1 (val, oval) {
      this.value1 = val
    },
    'obj.val2' (val, oval) {
      this.value2 = val
    }
  },
  methods: {
  }
```
此时页面输出:
![方法一](https://user-gold-cdn.xitu.io/2019/6/28/16b99b39bc59b2fd?w=1240&h=750&f=png&s=5085)

> 但现实开发过程中，我们的obj对象很难确定里面的key数量，假如很多个key的时候，总不能写多个监听去监听key吧？ 此时还有一种方法 如下

**方法二**
```javascript
data () {
    return {
      val1: '',
      value1: '',
      obj: {
        val2: ''
      },
      value2: ''
    }
  },
  watch: {
    val1 (val, oval) {
      this.value1 = val
    },
    'obj': {
      handler (val, oval) {
        this.value2 = val.val2
      },
      deep: true
    }
  },

```
**此时输出如下**
![方法二](https://user-gold-cdn.xitu.io/2019/6/28/16b99b39b71b7b68?w=790&h=760&f=png&s=3585)

> 解释:handler是watch的高级用法,里面有一个属性 deep，默认值是 false，代表是否深度监听, 还有一个属性 immediate，默认值也是 false ，但immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行。**deep深度监听会影响性能；** 两者可以同时存在；

> 此次代码演示demo请转 [王一诺watchDemo.vue](https://github.com/wLove-c/vue-study-demo/blob/master/src/components/watchDemo.vue)

如果对你有帮助麻烦点个赞👍
