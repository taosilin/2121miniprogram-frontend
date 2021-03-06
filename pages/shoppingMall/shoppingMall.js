// pages/shoppingMall/shoppingMall.js
const app = getApp();//设立顶部栏高度
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: ['学习考证','游戏看剧','吃喝玩乐','实习求职','太阳镜'],
    frameList: null,
    selectTab: 0,
    page: 0,
    isHideLoadMore: true,
    isHideEnd: true,
    classesDescription:[
      ["#四六级","#赶论文","#蹲图书馆"],
      ["#吃鸡","#熬夜","#追星"],
      ["#吃","#喝","#玩","#乐"],
      ["#一本正经","#前程似锦","#赚钱填坑"],
      ["#学车上路","#出门杀菌","#毕业旅行"]
    ],
    historyItem:['[Si] 查令','[N] 墨新','[Ag] 栀风']
    
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
        userID: "1",
        sortedBy: this.data.classes[this.data.selectTab],
        page: this.data.page,
        size: 6
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        //console.log(res.data.data)
        _this.setData({
          frameList: res.data.data
        })
      },
      fail: function (res) {
        console.log(res);
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
    this.search.hideBox();
    var _this = this;
    wx.getStorage({
      key: 'historyItem',
      success (res) {
        _this.setData({
          historyItem:res.data
        })
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
    //console.log('加载更多')
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
          userID: "1",
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
          console.log(res);
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
        userID: "1",
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
        console.log(res);
      }
    })
  }
})