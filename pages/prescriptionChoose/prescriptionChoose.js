// pages/prescriptionChoose/prescriptionChoose.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescriptions: [],
    isChecked: [true],
    checkIndex: 0
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
  // 选择验光单
  radioChange:function(e){
    this.setData({
      checkIndex: e.detail.value
    })
    console.log(e.detail.value)
  },
  // 确认选择
  confirmChoose:function(){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.addCart.setData({
      prescriptionID: this.data.prescriptions[this.data.checkIndex].prescriptionID,
      prescriptionName: this.data.prescriptions[this.data.checkIndex].prescriptionName,
      leftDegree: this.data.prescriptions[this.data.checkIndex].leftDegree,
      rightDegree: this.data.prescriptions[this.data.checkIndex].rightDegree,
      interpupillary: this.data.prescriptions[this.data.checkIndex].interpupillary,
      leftAstigmatism: this.data.prescriptions[this.data.checkIndex].leftAstigmatism,
      rightAstigmatism: this.data.prescriptions[this.data.checkIndex].rightAstigmatism,
      leftAxis: this.data.prescriptions[this.data.checkIndex].leftAxis,
      rightAxis: this.data.prescriptions[this.data.checkIndex].rightAxis,
    });
    prevPage.buyNow.setData({
      prescriptionID: this.data.prescriptions[this.data.checkIndex].prescriptionID,
      prescriptionName: this.data.prescriptions[this.data.checkIndex].prescriptionName,
      leftDegree: this.data.prescriptions[this.data.checkIndex].leftDegree,
      rightDegree: this.data.prescriptions[this.data.checkIndex].rightDegree,
      interpupillary: this.data.prescriptions[this.data.checkIndex].interpupillary,
      leftAstigmatism: this.data.prescriptions[this.data.checkIndex].leftAstigmatism,
      rightAstigmatism: this.data.prescriptions[this.data.checkIndex].rightAstigmatism,
      leftAxis: this.data.prescriptions[this.data.checkIndex].leftAxis,
      rightAxis: this.data.prescriptions[this.data.checkIndex].rightAxis,
    });
    wx.navigateBack({
      delta: 1
    }); 
  }
})