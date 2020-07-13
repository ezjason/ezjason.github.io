---
title: 代码片段 之 小程序授权
tags:
  - nodejs
date: 2020-07-12 23:41:44
---
### html内容
```
<!-- #ifdef MP-WEIXIN -->
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler" @click="clickHandle">
    Click me
</button>
<!-- #endif -->
<!-- #ifdef MP-ALIPAY -->
<button @click="getAuthCode">
    获取授权码
</button>
<!-- #endif -->
```

### 微信授权
```javaScript
clickHandle() {
    wx.getSetting({
        success(res) {
            if (res.authSetting['scope.userInfo']) {
                // 微信已授权回调
                this.$emit('click')
            }
        },
    })
}
```

### 支付宝授权
```javaScript

getAuthCode() {
    // todo 判断支付宝是否已授权，触发点击事件
    my.getAuthCode({
        scopes: 'auth_user', // 主动授权：auth_user，静默授权：auth_base。或者其它scope
        success: (res) => {
            if (res.authCode) {
                // 认证成功
                // 调用自己的服务端接口，让服务端进行后端的授权认证，并且利用session，需要解决跨域问题
                my.getAuthUserInfo({
                    success: (res) => {
                        console.log(res)
                    }
                })
            }
        },
    });
}

```
### 获取openId

```javaScript
// todo 更新全局属性 wx-appid，ali-appid

// 微信
// #ifdef MP-WEIXIN
wx.login({
    success (res) {
        if (res.code) {
            //发起网络请求
            // 携带 res.code 发送 请求 获取 微信 openId
            wx.request({
                url: '',
                data: {
                    code: res.code
                }
            })
        }
    }
})
// #endif

// 支付宝
// #ifdef MP-ALIPAY
my.getAuthCode({
    scopes: 'auth_base', // 主动授权：auth_user，静默授权：auth_base。或者其它scope
    success: (res) => {
        if (res.authCode) {
            // 携带 res.authCode 发送 请求 获取 支付宝 openId
        }
    },
});
// #endif

```
