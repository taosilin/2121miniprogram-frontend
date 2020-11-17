// pages/couponChoose/couponChoose.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //couponList:[],
    couponList:[
      {
        couponName:"20元抵用券",
        restriction:100,
        description:"特例商品不支持使用优惠券",
        discount:20,
        selected:false,
        openDetail:false
      },
      {
        couponName:"150元抵用券",
        restriction:400,
        description:"特例商品不支持使用优惠券",
        discount:150,
        selected:false,
        openDetail:false
      }
    ],
    //enableList:[],
    enableList:[
      {
        couponName:"20元抵用券",
        restriction:100,
        description:"特例商品不支持使用优惠券",
        discount:20,
        selected:false,
        openDetail:false
      },
      {
        couponName:"150元抵用券",
        restriction:400,
        description:"特例商品不支持使用优惠券",
        discount:150,
        selected:false,
        openDetail:false
      }
    ],
    disableList:[
      {
        couponName:"20元抵用券",
        restriction:300,
        description:"特例商品不支持使用优惠券",
        discount:20,
        selected:false,
        openDetail:false
      },
      {
        couponName:"150元抵用券",
        restriction:500,
        description:"特例商品不支持使用优惠券",
        discount:150,
        selected:false,
        openDetail:false
      },
      {
        couponName:"20元抵用券",
        restriction:300,
        description:"特例商品不支持使用优惠券",
        discount:20,
        selected:false,
        openDetail:false
      },
      {
        couponName:"150元抵用券",
        restriction:500,
        description:"特例商品不支持使用优惠券",
        discount:150,
        selected:false,
        openDetail:false
      }
    ],
    inputCode:"",
    windowWidth:414,
    couponWidth:378,
    couponListHeight: 896-143,
    isEnable:true,
    selectCouponIndex: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth,
      couponWidth:sysInfo.windowWidth*0.913,
      couponListHeight:sysInfo.windowHeight-143
    })
    var _this = this;
    wx.request({
      url: app.globalData.host+'/usercoupon/list',
      data: {
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          couponList: res.data.data
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
      selectCouponIndex:id
    })
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      coupon:this.data.couponList[id]
    });
    wx.navigateBack({
      delta: 1
    }); 
  }
})