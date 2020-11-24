// pages/shoppingMall/shoppingMall.js
const app = getApp();//设立顶部栏高度
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes:['学习','娱乐','生活','求职'],
    frameList: null
    // types:[
    //   {
    //     typename:"框型",
    //     types:[
    //       {typename:"圆框",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"方框",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"半框",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"大框",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"飞行员款",imgUrl:"../../image/glasses.jpg"}
    //     ]
    //   },
    //   {
    //     typename:"风格",
    //     types:[
    //       {typename:"商务",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"休闲",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"复古",imgUrl:"../../image/glasses.jpg"},
    //       {typename:"学生",imgUrl:"../../image/glasses.jpg"}
    //     ]
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    });
    var _this = this;
    wx.request({
      url: app.globalData.host+'/frame/list',
      data: {
        page: 0,
        size: 20
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          frameList: res.data.data
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
    //获得searchBox组件
    this.search = this.selectComponent("#search");
    this.labelBar = this.selectComponent("#labelBar");
    this.labelBar.setData({
      itemWidth: 160
    })
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
  },
  //前往商品详情页
  goToProductDetail:function(e){
    let id = e.currentTarget.dataset.id;
    console.log(e);
    //待修改
    wx.navigateTo({
      url: '../productDetail/productDetail?frameID='+id,
    })
  }
})