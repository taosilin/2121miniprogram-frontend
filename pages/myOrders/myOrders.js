// pages/myOrders/myOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[
      {
        orderdate:"2020-08-01",
        name:"银色细边眼镜",
        orderid:"12345567788898",
        color:"银色",
        price:275,
        num:1,
        degree:-3.25,
        state:"待付款",
        picture:"../../image/glasses.jpg"
      },
      {
        orderdate:"2020-08-01",
        name:"黑色粗边眼镜",
        orderid:"12345567788898",
        color:"黑色",
        price:299,
        num:1,
        degree:-5.50,
        state:"待付款",
        picture:"../../image/glasses.jpg"
      },
      {
        orderdate:"2020-08-01",
        name:"黑色粗边眼镜",
        orderid:"12345567788898",
        color:"黑色",
        price:299,
        num:1,
        degree:-5.50,
        state:"待付款",
        picture:"../../image/glasses.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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