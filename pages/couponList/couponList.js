// pages/couponList/couponList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList:[
      {
        name:"20元抵用券",
        restriction:"无门槛",
        description:"特例商品不支持使用优惠券",
        discount:20,
        selected:false,
        openDetail:false
      },
      {
        name:"150元抵用券",
        restriction:"无门槛",
        description:"特例商品不支持使用优惠券",
        discount:150,
        selected:false,
        openDetail:false
      }
    ],
    //couponList:[],
    inputCode:"",
    windowWidth:414,
    imgWidth:246,
    inputWidth:297,
    btnWidth:79,
    couponWidth:378,
    couponHeight:106,
    windowHeight:896
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth,
      imgWidth:sysInfo.windowWidth*0.594,
      inputWidth:sysInfo.windowWidth*0.71739,
      btnWidth:sysInfo.windowWidth*0.1908,
      couponWidth:sysInfo.windowWidth*0.913,
      couponHeight:sysInfo.windowWidth*0.256,
      windowHeight:sysInfo.windowHeight
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
    console.log(e)
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
    console.log(this.data.inputCode)
    wx.showModal({
      title: '确认兑换',
      content: '您确认兑换优惠券？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          //此处填写领取优惠券逻辑
          wx.showToast({
            title: "      优惠券码不正确      ",
            icon:'none',
            duration: 2000
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          //
        }
      }
    })
  }
})