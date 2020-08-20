//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    windowWidth:414,
    postHeight:504,
    indicatorDots: true,//显示指示点
    autoplay: true,//自动播放
    interval: 2000,
    duration: 500,
    circular:true, //衔接滑动
    postList:[
      {imgUrl:'../../image/post.png'},
      {imgUrl:'../../image/post0.png'},
      {imgUrl:'../../image/post1.png'},
      {imgUrl:'../../image/post2.png'}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth,
      postHeight:sysInfo.windowWidth*1.2174
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onSlideChange: function (event) { 
    var postId = event.detail.current; 
    console.log(postId);
  }
})
