// pages/shoppingMall/shoppingMall.js
const App = getApp();//设立顶部栏高度
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes:['近视眼镜','太阳镜','老花镜','散光镜','儿童矫正镜','隐形眼镜'],
    types:[
      {
        typename:"框型",
        types:[
          {typename:"圆框",imgUrl:"../../image/glasses.jpg"},
          {typename:"方框",imgUrl:"../../image/glasses.jpg"},
          {typename:"半框",imgUrl:"../../image/glasses.jpg"},
          {typename:"大框",imgUrl:"../../image/glasses.jpg"},
          {typename:"飞行员款",imgUrl:"../../image/glasses.jpg"}
        ]
      },
      {
        typename:"风格",
        types:[
          {typename:"商务",imgUrl:"../../image/glasses.jpg"},
          {typename:"休闲",imgUrl:"../../image/glasses.jpg"},
          {typename:"复古",imgUrl:"../../image/glasses.jpg"},
          {typename:"学生",imgUrl:"../../image/glasses.jpg"}
        ]
      }
    ],
    itemWidth:94
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      itemWidth:(sysInfo.windowWidth-132)/3
    })
    this.setData({
      navH: App.globalData.navHeight
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得searchBox组件
    this.search = this.selectComponent("#search");
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
  goToProductList:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../productList/productList',
    })
  },
  onOpenSearch:function(e){
    this.search.showBox();
  }
})