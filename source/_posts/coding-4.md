---
title: 数组方法的扩展:array.every()和array.some()
tags: javaScript
categories: 编程
---

从字面认知:every是每一个都，some是都有一些就~~
即:
1. every():方法用于检测数组中所有元素是否都符合指定条件，若符合返回true，否则返回false；
2. some():方法用于检测数组中的元素是否有满足指定条件的，若满足返回true，否则返回false；

## every()

```javascript
// every():方法用于检测数组中所有元素是否都符合指定条件，若符合返回true，否则返回false,且程序不会继续往下执行；
array.every(function(item,index,array）{
                 // item:当前元素的值；

                 // index:当前元素的索引；

                 // array:当前元素的数组对象；

         })

```

#### 例子:

```javascript
//es6
let age = [10,20,30,40,50,22,26]
 // 所有都满足才会返回true,否则返回false;
 let result = age.every((item,index,array)=>{
 console.log(item) // 10
 console.log(index) // 0
 console.log(array) //[10,20,30,40,50,22,26]

     return item > 22;
 	})

// es5
// let result = age.every(function(item,index,array){
//     return item > 22;
// 	})
 	console.log(result) // false

```

## some()

```javascript
// some():方法用于检测数组中是否有元素符合指定条件，若有符合的返回true，且程序不会继续往下执行；否则返回false；
array.some(function(item,index,array）{
                 // item:当前元素的值；

                 // index:当前元素的索引；

                 // array:当前元素的数组对象；

         })

```

#### 例子:

```javascript
//es6
let age = [10,20,30,40,50,22,26]
 // 所有都满足才会返回true,否则返回false;
 let result = age.some((item,index,array)=>{

  console.log(item) // 10 20 30
  console.log(index) // 0 1 2
  console.log(array) //[10,20,30,40,50,22,26]


     return item > 22;
 	})

// es5
// let result = age.some(function(item,index,array){
//     return item > 22;
// 	})
 	console.log(result) // true

```
