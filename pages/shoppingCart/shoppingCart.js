// pages/shoppingCart/shoppingCart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //productList:[],
    productList:[],
    windowWidth:414,
    imgWidth:264,
    productWidth:103,
    contentWidth:230
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var _this = this;
    this.setData({
      windowWidth:sysInfo.windowWidth,
      imgWidth:sysInfo.windowWidth*0.637,
      productWidth:sysInfo.windowWidth*0.24879,
      contentWidth:sysInfo.windowWidth*0.5
    })

    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          productList: res.data.data
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
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          productList: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
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
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    let items = this.data.productList;
    items[id].selected = !items[id].selected
    this.setData({
      productList:items
    })
  },
  openPopup:function(){
    this.popup.showPopup();
  }
})