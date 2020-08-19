// pages/productList/productList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:true,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      },{
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      },{
        name:'开普勒 钛架-全框',
        price:299,
        isNew:false,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses1.jpg'
      }
    ],
    itemWidth:181
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      itemWidth:(sysInfo.windowWidth-54)/2
    });
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