// pages/orderDetail/orderDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/order/detail',
      data:{
        orderID:options.orderID
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
  // 申请退款
  applyRefund:function(e){
    let id = e.currentTarget.dataset.id;
    let item = this.data.orderDetail.frames[id];
    let frames = new Array();
    frames.push(item);
    let info = this.data.orderDetail;
    info.frames = frames;
    info = JSON.stringify(info);
    wx.navigateTo({
      url: '../applyRefund/applyRefund?orderDetail='+info,
    });
  },
  // 申请退货
  applyReturn:function(e){
    let id = e.currentTarget.dataset.id;
    let item = this.data.orderDetail.frames[id];
    let frames = new Array();
    frames.push(item);
    let info = this.data.orderDetail;
    info.frames = frames;
    info = JSON.stringify(info);
    wx.navigateTo({
      url: '../applyReturn/applyReturn?orderDetail='+info,
    });
  }
})