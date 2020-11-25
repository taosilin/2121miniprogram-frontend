// pages/shoppingMall/shoppingMall.js
const app = getApp();//设立顶部栏高度
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: ['通勤','运动','恋爱','职场'],
    frameList: null,
    selectTab: 0,
    page: 0,
    isHideLoadMore: true,
    isHideEnd: true
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
      url: app.globalData.host+'/frame/class',
      data: {
        sortedBy: this.data.classes[this.data.selectTab],
        page: this.data.page,
        size: 6
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
  //下拉刷新
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function()
    {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },
  goToProductList:function(e){
    wx.navigateTo({
      url: '../productList/productList',
    })
  },

  //加载更多
  onReachBottom: function () {
    console.log('加载更多')
    this.setData({
      isHideLoadMore: false,
      isHideEnd: true,
      page: this.data.page+1
    })
    setTimeout(() => {
      var _this = this;
      wx.request({
        url: app.globalData.host+'/frame/class',
        data: {
          sortedBy: this.data.classes[this.data.selectTab],
          page: this.data.page,
          size: 6
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          if (res.data.data.length==0){
            _this.setData({
              isHideEnd: false,
              isHideLoadMore: true,
              page: _this.data.page-1
            })
          }
          else{
            let frameList = _this.data.frameList.concat(res.data.data);
            _this.setData({
              frameList: frameList
            })
          }
          
        },
        fail: function (res) {
          console.log("请求失败");
        }
      })
    }, 1000)
  },

  // 打开搜索框
  onOpenSearch:function(e){
    this.search.showBox();
  },

  // 前往商品详情页
  goToProductDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../productDetail/productDetail?frameID='+id,
    })
  },

  // tab场景改变
  onTabChange:function(e){
    this.setData({
      selectTab:e.detail,
      page: 0,
      isHideEnd: true,
      isHideLoadMore: true
    })
    var _this = this;
    wx.request({
      url: app.globalData.host+'/frame/class',
      data: {
        sortedBy: this.data.classes[this.data.selectTab],
        page: this.data.page,
        size: 6
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
  }
})