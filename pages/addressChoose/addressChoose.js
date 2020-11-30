// pages/addressChoose/addressChoose.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: [],
    isDefault: [true]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/address/list',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          addresses: res.data.data
        });
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
    var _this = this;
    wx.request({
      url: app.globalData.host+'/address/list',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          addresses: res.data.data
        });
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
  
  // 添加地址
  goToAddAddress:function(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },

  // 修改地址
  onChangeAddress:function(e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    var info = JSON.stringify(this.data.addresses[id]);
    console.log(info);
    wx.navigateTo({
      url: '../addAddress/addAddress?info='+info,
    });
  },
  // 选择地址
  onSelectAddress:function(e){
    let id = e.currentTarget.dataset.id
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      address:this.data.addresses[id]
    });
    wx.navigateBack({
      delta: 1
    }) 
  },
  // 选择地址
  radioChange:function(e){
    console.log(e)
    let id = Number(e.detail.value)
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      address:this.data.addresses[id]
    });
    wx.navigateBack({
      delta: 1
    }) 
  }

})