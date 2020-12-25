// pages/userCenter/userCenter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    phoneNumber: null,
    registrationTime: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    if (app.globalData.phoneNumber!=null){  
      this.setData({phoneNumber: app.globalData.phoneNumber});
      this.setData({userInfo: app.globalData.userInfo});
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
          let days = _this.getDaysBetween(res.data.data.registrationTime);
          _this.setData({
            registrationTime: days
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
   
    const sysInfo = wx.getSystemInfoSync();
    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
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

  // 获取用户微信信息
  bindgetuserinfo: function(e){
    // var _this = this;
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.getPhoneNumber.setData({
      flag: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.getPhoneNumber = this.selectComponent("#getPhoneNumber");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    if (app.globalData.phoneNumber!=null){  
      this.setData({phoneNumber: app.globalData.phoneNumber});
      this.setData({userInfo: app.globalData.userInfo});
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
          let days = _this.getDaysBetween(res.data.data.registrationTime);
          _this.setData({
            registrationTime: days
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goToMyOrders:function(e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../myOrders/myOrders?index='+index,
    })
  },
  goToLikeList:function(){
    wx.navigateTo({
      url: '../likeList/likeList',
    })
  },
  goToMyAddress:function(){
    wx.navigateTo({
      url: '../myAddress/myAddress',
    })
  },
  goToCouponList:function(){
    wx.navigateTo({
      url: '../couponList/couponList',
    })
  },
  goToPolicy:function(){
    wx.navigateTo({
      url: '../policy/policy',
    })
  },

  //用户已存在
  binduserExist:function(e){
    var _this=this;
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
        let days = _this.getDaysBetween(res.data.data.registrationTime);
        _this.setData({
          registrationTime: days
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  // 计算注册天数
  getDaysBetween:function(dateString){
    var startDate = Date.parse(dateString);
    var endDate = new Date();
    if (startDate>endDate){
      return 1;
    }
    if (startDate==endDate){
      return 1;
    }
    var days = (endDate - startDate)/(1*24*60*60*1000);
    return Math.floor(days)+1;
  },
  // 联系客服
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  // 关注公众号
  bindload: function () {
    wx.navigateTo({
      url: '../webView/webView',
    })
  },
})