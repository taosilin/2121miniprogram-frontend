//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    postHeight:504,
    indicatorDots: true,//显示指示点
    autoplay: true,//自动播放
    interval: 2000,
    duration: 500,
    circular:true, //衔接滑动
    postList:[],
    currentTab: 0,
    popupVisible: true,
    popupVisible1: true,
    userInfo: null,
    phoneNumber: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.getUserInfo = this.selectComponent("#getUserInfo");
    this.getPhoneNumber = this.selectComponent("#getPhoneNumber");
  },
  onLoad: function () {

    var _this = this;
    
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        app.globalData.code = res.code

        // 从缓存获取openid
        wx.getStorage({
          key: 'openid',
          success: function(res) {
            app.globalData.openid = res.data
            wx.request({
              url: app.globalData.host+'/user/detail',
              data:{
                userID: app.globalData.openid
              },
              method: 'POST',
              header: {
                'content-type': 'application/json'//默认值
              },
              success: function (res) {
                if (res.data.data!=null){
                  app.globalData.userInfo = res.data.data
                  app.globalData.phoneNumber = res.data.data.phoneNumber
                  _this.setData({
                    userInfo:res.data.data,
                    phoneNumber:res.data.data.phoneNumber
                  })
                }
                
              },
              fail: function (res) {
                console.log("请求失败");
              }
            })
          },
          fail:function(e){
            console.log(e)
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            wx.request({
              url: app.globalData.host + '/app/initWxLogin',
              data:{
                jsCode: res.code
              },
              method: 'POST',
              header:{
                'content-type':'application/json'
              },
              success:(res) => {
                app.globalData.session_key = res.data.data.session_key
                app.globalData.openid = res.data.data.openid
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

    wx.request({
      url: app.globalData.host+'/post/list',
      data:{},
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          postList: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })

    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      postHeight:sysInfo.windowWidth*1.2174
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //var _this = this;
    if (app.globalData.phoneNumber!=null){  
      this.setData({phoneNumber: app.globalData.phoneNumber});
      this.setData({userInfo: app.globalData.userInfo});
    }
  },

  onSlideChange: function (event) { 
    var postId = event.detail.current; 
    // console.log(postId);
  },

  onPopup:function(){
    var _this = this;
    wx.request({
      url: app.globalData.host+'/usercoupon/add',
      data:{
        userID: app.globalData.openid,
        couponID:"4"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
      },
      fail: function (res) {
        console.log("请求失败");
      }
    });
    wx.request({
      url: app.globalData.host+'/usercoupon/add',
      data:{
        userID: app.globalData.openid,
        couponID:"5"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res)
        if (res.data.code===200){
          _this.setData({
            popupVisible: !_this.data.popupVisible
          })
        }
        else{
          _this.setData({
            popupVisible1: !_this.data.popupVisible1
          })
        }
      },
      fail: function (res) {
        console.log("请求失败");
      }
    });
    
  },

  onGetCoupon:function(){
    this.setData({
      popupVisible: !this.data.popupVisible
    });
  },

  onGetCoupon1:function(){
    this.setData({
      popupVisible1: !this.data.popupVisible1
    });
  },

  // 登录
  onLogin:function(){
    this.getUserInfo.setData({
      flag:false
    })
  },
  // 获取用户微信信息
  bindgetuserinfo: function(e){
    // var _this = this;
    console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail
    })
    this.getPhoneNumber.setData({
      flag: false
    })
  }
  // //tabbar切换
  // swichNav: function (e) {
  //   //console.log(e);
  //   let that = this;
  //   if (this.data.currentTab === e.currentTarget.dataset.id) {
  //     return false;
  //   } else {
  //     that.setData({
  //       currentTab: e.currentTarget.dataset.id
  //     })
  //   }
  // }

})
