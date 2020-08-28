// pages/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      name:"陶女士",
      telephone:"18916273661",
      province:"上海市",
      city:"上海市",
      district:"嘉定区",
      detail:"曹安公路4800号同济大学学生公寓10号楼"
    },
    product:{
      name:"开普勒钛架全框眼镜",
      price:299,
      num:1,
      imgUrl:"../../image/glasses.jpg"
    },
    imgWidth:103
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      imgWidth:sysInfo.windowWidth*0.24879
    });
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
  goToCouponChoose:function(){
    wx.navigateTo({
      url: '../couponChoose/couponChoose',
    })
  },
  openPopup:function(){
    this.popup.showPopup();
  }
})