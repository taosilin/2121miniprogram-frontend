// pages/myPrescription/myPrescription.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescriptions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/prescription/list',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          prescriptions: res.data.data
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
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
    var _this = this;
    wx.request({
      url: app.globalData.host+'/prescription/list',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          prescriptions: res.data.data
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
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
  // 新增验光单
  goToAddPrescription: function(){
    wx.navigateTo({
      url: '../addPrescription/addPrescription',
    })
  },
  // 修改验光单
  onChangePrescription:function(e){
    var id = e.currentTarget.dataset.id;
    var info = JSON.stringify(this.data.prescriptions[id]);
    //console.log(info);
    wx.navigateTo({
      url: '../addPrescription/addPrescription?info='+info,
    });
  }
})