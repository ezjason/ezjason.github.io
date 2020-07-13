---
title: Github actions 部署vue项目
tags:  [github,node,vue]
categories: 编程
---

### 关于 actions
actions是个什么东西呢，其实他就是github的CI/CD工具，如果你用过gitlab的runner那你对CI/CD这个概念肯定不会陌生。

如果你对CI/CD没啥概念，那我推荐你百度一下有个大概的了解就行。

workflow相当于gitlab里的gitlabl-ci.yml都是定义了一个自动化的流程，在这个流程里我们可以在允许的范围内为所欲为。

###workflow 语法介绍
语法介绍推荐看[官方文档](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#creating-a-workflow-file)或者[阮一峰老师的博客](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

###如何部署

废话不多说，我们直接进入正题，如何使用actions部署vue项目。


###创建一个vue项目
我们这使用vue-cli直接生成一个项目。打开控制台，输入以下命令：

```
cli(2.9版本)
vue init webpack github-action-demo

cli(3.0版本)
vue create github-action-demo
```

然后vue就会让我们选预设，这里我们就直接选DEFAULT，回车走起。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/cli.png)

然后就进入了安装过程，巴拉巴拉吧。。。。。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/running.png)

终于完成了

![图片预览](http://q9a56mzr3.bkt.clouddn.com/success.png)



### 修改package.json文件

我们需要在文件中新加一行

```
"homepage":"https://[用户名].github.io/[项目名]"
```

![图片预览](http://q9a56mzr3.bkt.clouddn.com/home.png)

### 上传代码
完成以上步骤后，我们再通过以下步骤上传一下代码。

登入我们的Github账号
让我们新建一个Repo
接着一顿操作上传代码

```
 git init
 git add .
 git commit -m "提交信息"
 git remote add orgin [仓地址]
 git push -u origin master
```

### 准备工作

1.我们需要申请一个 private token

 首先点击我们的小头像，然后点击 Setting。
 
 ![图片预览](http://q9a56mzr3.bkt.clouddn.com/1.png)
 
 接着在左侧列表中选择 Developer setttings。
 
 ![图片预览](http://q9a56mzr3.bkt.clouddn.com/2.png)
 
 然后在左侧列表中选择 Personal access tokens
 
 ![图片预览](http://q9a56mzr3.bkt.clouddn.com/3.png)
 
 最后我们点击 Generate new token按钮，选择好权限，生成一个新的token，记下生成的token，一会我们还需要用到。
 
 ![图片预览](http://q9a56mzr3.bkt.clouddn.com/4.png)
 
2.我们直接将token明文写在yml中实在是一种缺心眼的行为，所以我们这选择将token保存在secret中。

回到我们刚新建的repo中

点击Settings,再点击左侧的Secrets按钮，点击Add a new secret按钮，自己起个Secret名称（我这就叫ACCESS_TOKEN了）并填入刚申请的token值，点击Add secret按钮。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/5.png)


###编写yml文件
进入Actions页面，可以看到github给我们预设了很多模板，我们这里先不管这些，点击 Set up a workflow yourself

（我这里已经新建过了，所以你可以照看页面提示操作）

![图片预览](http://q9a56mzr3.bkt.clouddn.com/6.png)

现在让我们开始编写yml文件吧，输入以下内容，并给yml文件换个名字，我们就叫 main.yml

```$xslt
name: buildAndDeploy
on:
  push
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: checkout
      uses: actions/checkout@master

    - name: buildAndDeploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: dist
        BUILD_SCRIPT: npm install && npm run build
```

注：ACCESS_TOKEN 就是在新建的token上的命名的，也就是如下图

![图片预览](http://q9a56mzr3.bkt.clouddn.com/7.png)

点击 Start commit按钮，接着点击 Commit new file按钮。

回到repo主页，我们可以看到action已经跑起来啦。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/8.png)

点击Details可以查看详情。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/9.png)

###开启github pages
进入repo的Settings界面

找到GitHub Pages设置，Source选择我们在yml文件中指定的那个分支，设置完成后可以看到一行蓝色的提示：Your site is ready to be published at xxxxxx

![图片预览](http://q9a56mzr3.bkt.clouddn.com/0.png)

-----最后我们访问 https://[用户名].github.io/[项目名] 就可以看到自己的网站啦。

![图片预览](http://q9a56mzr3.bkt.clouddn.com/10.png)