// pages/couponChoose/couponChoose.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //couponList:[],
    couponList:[],
    //enableList:[],
    enableList:[],
    disableList:[],
    inputCode:"",
    windowWidth:414,
    windowHeight:896,
    couponWidth:378,
    isEnable:true,
    selectCouponIndex: null,
    totalAmount: 0,
    actualAmount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let coupons = JSON.parse(options.coupons);
    const sysInfo = wx.getSystemInfoSync();

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    this.setData({
      windowWidth:sysInfo.windowWidth,
      couponWidth:sysInfo.windowWidth*0.913,
      windowHeight:sysInfo.windowHeight
    });


    let enableList = coupons.enabledCoupons;
    let disableList = coupons.disabledCoupons;
    for (let i=0;i<enableList.length;i++){
      enableList[i].receiveTime = enableList[i].receiveTime.slice(0,10)
      enableList[i].deadline = enableList[i].deadline.slice(0,10)
    }
    for (let i=0;i<enableList.length;i++){
      disableList[i].receiveTime = disableList[i].receiveTime.slice(0,10)
      disableList[i].deadline = disableList[i].deadline.slice(0,10)
    }


    this.setData({
      couponList:enableList,
      enableList:enableList,
      disableList:disableList
    });
    
    this.setData({
      totalAmount:prevPage.data.totalAmount,
      actualAmount:prevPage.data.totalAmount
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
  onEnable:function(){
    this.setData({
      isEnable:true,
      couponList:this.data.enableList
    })
  },
  onDisable:function(){
    this.setData({
      isEnable:false,
      couponList:this.data.disableList
    })  
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
  },
  // 选择优惠券
  radioChange:function(e){
    let id = Number(e.detail.value)
    this.setData({
      selectCouponIndex:id,
      actualAmount: this.data.totalAmount-this.data.enableList[id].discount
    })
  },
  // 确认选择
  onConfirm:function(){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      coupon:this.data.couponList[this.data.selectCouponIndex]
    });
    wx.navigateBack({
      delta: 1
    }); 
  }

})