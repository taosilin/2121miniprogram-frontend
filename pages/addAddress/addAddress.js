// pages/addAddress/addAddress.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressID: "",
    receiver: "",
    telephone: "",
    region: [],
    detail: "",
    isNew: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.info!=undefined){
      var info = JSON.parse(options.info);
      this.setData({
        addressID: info.addressID,
        receiver: info.receiver,
        telephone: info.telephone,
        region: [info.province,info.city,info.district],
        detail: info.detail,
        isNew:false
      })
    }
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
  onReceiverChange:function(e){
    this.setData({
      receiver:e.detail.value
    })
  },
  onTelChange:function(e){
    this.setData({
      telephone:e.detail.value
    })
  },
  onDetailChange:function(e){
    this.setData({
      detail:e.detail.value
    })
  },
  bindRegionChange:function(e){
    console.log("picker值变为",e.detail.value)
    this.setData({
      region:e.detail.value
    })
  },

  // 提交新增地址
  onAdd: function(){
    wx.request({
      url: app.globalData.host + '/address/add',
      data:{
        addressID: (new Date()).getTime().toString(),
        userID: app.globalData.phoneNumber,
        receiver: this.data.receiver,
        telephone: this.data.telephone,
        province: this.data.region[0],
        city: this.data.region[1],
        district: this.data.region[2],
        detail: this.data.detail,
        defaultAdd: "0"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        wx.navigateBack({
          delta:1,
        });
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
  },

  // 编辑地址
  onUpdate: function(){
    wx.request({
      url: app.globalData.host + '/address/update',
      data: {
        addressID: this.data.addressID,
        receiver: this.data.receiver,
        telephone: this.data.telephone,
        province: this.data.region[0],
        city: this.data.region[1],
        district: this.data.region[2],
        detail: this.data.detail
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        wx.navigateBack({
          delta:1,
        });
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
  },

  // 删除地址
  onDelete: function(){
    wx.request({
      url: app.globalData.host + '/address/delete',
      data: {
        addressID: this.data.addressID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        wx.navigateBack({
          delta:1,
        });
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
  }

})