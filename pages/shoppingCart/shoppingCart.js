// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //productList:[],
    productList:[
      {
        name:"开普勒钛架全框眼镜",
        price:275,
        imgUrl:"../../image/glasses.jpg",
        num:1
      },
      {
        name:"开普勒钛架全框眼镜",
        price:275,
        imgUrl:"../../image/glasses.jpg",
        num:1
      },
      {
        name:"开普勒钛架全框眼镜",
        price:275,
        imgUrl:"../../image/glasses.jpg",
        num:1
      }
    ],
    windowWidth:414,
    imgWidth:264
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth,
      imgWidth:sysInfo.windowWidth*0.637
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

  }
})