// pages/userCenter/userCenter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    orderDivTop:170,
    otherDivTop:300,
    moreDivTop:560
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({userInfo:app.globalData.userInfo});
    const sysInfo = wx.getSystemInfoSync();
    console.log(sysInfo.windowWidth);
    console.log(sysInfo.windowHeight);
    this.setData({
      orderDivTop:sysInfo.windowWidth/2-40,
      otherDivTop:sysInfo.windowWidth/2+102,
      moreDivTop:sysInfo.windowWidth/2+370,
    });
    console.log(this.data.orderDivTop);
    console.log(this.data.otherDivTop);
    console.log(this.data.moreDivTop);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  goToMyOrders:function(){
    wx.navigateTo({
      url: '../myOrders/myOrders',
    })
  }
})