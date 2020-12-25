//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        //console.log(res)
        var _app = this
        this.globalData.code = res.code

        // 从缓存获取openid
        wx.getStorage({
          key: 'openid',
          success: function(res) {
            //console.log(res.data)
            _app.globalData.openid = res.data
            wx.request({
              url: _app.globalData.host+'/user/detail',
              data:{
                userID: _app.globalData.openid
              },
              method: 'POST',
              header: {
                'content-type': 'application/json'//默认值
              },
              success: function (res) {
                //console.log(res.data.data)
                if (res.data.data!=null){
                  _app.globalData.userInfo = res.data.data
                  _app.globalData.phoneNumber = res.data.data.phoneNumber
                }
                
              },
              fail: function (res) {
                console.log(res);
              }
            })
          },
          fail:function(e){
            console.log(e)
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            wx.request({
              url: _app.globalData.host + '/app/initWxLogin',
              data:{
                jsCode: res.code
              },
              method: 'POST',
              header:{
                'content-type':'application/json'
              },
              success:(res) => {
                //console.log(res)
                _app.globalData.session_key = res.data.data.session_key
                _app.globalData.openid = res.data.data.openid
                wx.setStorage({
                  key:"openid",
                  data:res.data.data.openid
                })
              }
            }) 
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        //console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              //console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取顶部栏信息
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    host: 'https://from2121.com:8443',
    navHeight: 0,
    session_key: null,
    openid: null,
    phoneNumber: null,
    code: null
  }
})