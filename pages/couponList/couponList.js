// pages/couponList/couponList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList:[],
    selectCouponIndex: null,
    inputCode:"",
    windowWidth:414,
    couponListHeight: 896-54,
    couponWidth:378
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var _this = this;
    this.setData({
      windowWidth:sysInfo.windowWidth,
      couponWidth:sysInfo.windowWidth*0.913,
      couponListHeight:sysInfo.windowHeight-54
    })
    wx.request({
      url: app.globalData.host+'/usercoupon/list',
      data: {
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        let couponList = res.data.data;
        for (let i=0;i<couponList.length;i++){
          couponList[i].receiveTime = couponList[i].receiveTime.slice(0,10)
          couponList[i].deadline = couponList[i].deadline.slice(0,10)
        }
        _this.setData({
          couponList: couponList
        })
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
  selectCoupon(e) {
    // console.log('radio发生change事件，携带value值为：', e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    let items = this.data.couponList;
    items[id].selected = !items[id].selected
    this.setData({
      couponList:items
    })
  },
  onDetail:function(e){
    let id = e.currentTarget.dataset.id;
    let items = this.data.couponList;
    items[id].openDetail = !items[id].openDetail;
    this.setData({
      couponList:items
    })
  },

  onInputChange:function(e){
    this.setData({
      inputCode:e.detail.value
    })
  },

  onExchange:function(e){
    //console.log(this.data.inputCode)
    wx.showModal({
      title: '确认兑换',
      content: '您确认兑换优惠券？',
      success (res) {
        if (res.confirm) {
          //console.log('用户点击确定')
          //此处填写领取优惠券逻辑
          wx.showToast({
            title: "      优惠券码不正确      ",
            icon:'none',
            duration: 2000
          })
        } else if (res.cancel) {
          //console.log('用户点击取消')
          //
        }
      }
    })
  },

  // 选择优惠券
  radioChange:function(e){
    //console.log(e)
    this.setData({
      selectCouponIndex:Number(e.detail.value)
    })
  }

})