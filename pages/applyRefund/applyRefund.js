// pages/applyRefund/applyRefund.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 896,
    orderDetail: {},
    refundReason: null,
    description: '',
    customInfo: {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowHeight: sysInfo.windowHeight
    })
    var _this = this;
    wx.request({
      url: app.globalData.host+'/order/detail',
      data:{
        orderID: options.orderID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data.data)

        _this.setData({
          orderDetail: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
    this.refund = this.selectComponent("#refund");
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
    
  // 用户输入退款描述
  onDescriptionChange:function(e){
    this.setData({
      description:e.detail.value
    })
  },

  // 打开定制信息弹窗
  openPopup:function(e){
    let index = e.currentTarget.dataset.id;
    let customInfo = {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    };
    customInfo.leftEyeDegree = this.data.orderDetail.frames[index].leftDegree;
    customInfo.rightEyeDegree = this.data.orderDetail.frames[index].rightDegree;
    customInfo.interpupillaryDistance = this.data.orderDetail.frames[index].interpupillary;
    customInfo.leftEyeAstigmatism = this.data.orderDetail.frames[index].leftAstigmatism;
    customInfo.rightEyeAstigmatism = this.data.orderDetail.frames[index].rightAstigmatism;
    customInfo.leftEyeAxis = this.data.orderDetail.frames[index].leftAxis;
    customInfo.rightEyeAxis = this.data.orderDetail.frames[index].rightAxis;
    this.setData({
      customInfo: customInfo
    })
    this.popup.showPopup();
  },

  // 选择退款原因
  openRefundReason:function(e){
    this.refund.setData({
      flag: false
    })
  },

  // 选择退款原因的回调函数
  chooseReason:function(e){
    this.setData({
      refundReason: e.detail
    })
  }
})