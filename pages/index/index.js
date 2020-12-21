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
    if (app.globalData.phoneNumber!=null){  
      this.setData({phoneNumber: app.globalData.phoneNumber});
      this.setData({userInfo: app.globalData.userInfo});
    }

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
    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    //   wx.request({
    //     url: app.globalData.host+'/user/add',
    //     data: {
    //       userID:'18916273661',
    //       nickname:app.globalData.userInfo.nickName,
    //       gender:app.globalData.userInfo.gender,
    //       avatarUrl:app.globalData.userInfo.avatarUrl
    //     },
    //     method: 'POST',
    //     header: {
    //       'content-type': 'application/json'//默认值
    //     },
    //     success: function (res) {
    //       console.log(res.data);
    //     },
    //     fail: function (res) {
    //       console.log("用户已存在");
    //     }
    //   });
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //     wx.request({
    //       url: app.globalData.host+'/user/add',
    //       data: {
    //         nickname:app.globalData.userInfo.nickName,
    //         gender:app.globalData.userInfo.gender,
    //         avatarUrl:app.globalData.userInfo.avatarUrl
    //       },
    //       method: 'POST',
    //       header: {
    //         'content-type': 'application/json'//默认值
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //       },
    //       fail: function (res) {
    //         console.log("用户已存在");
    //       }
    //     });
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    
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
    this.setData({
      popupVisible: !this.data.popupVisible
    })
  },
  onGetCoupon:function(){
    //var _this = this;
    this.setData({
      popupVisible: !this.data.popupVisible
    });
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
      },
      fail: function (res) {
        console.log("请求失败");
      }
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
