// pages/searchResult/searchResult.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchResult:[],
    // searchResult:[
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:true,
    //     isSaled:false,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:1361
    //   },
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:true,
    //     isSaled:false,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:1128
    //   },
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:true,
    //     isSaled:true,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:910
    //   },
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:true,
    //     isSaled:false,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:13610
    //   },
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:true,
    //     isSaled:false,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:678
    //   },
    //   {
    //     name:'开普勒 钛架-全框',
    //     price:299,
    //     isNew:false,
    //     isSaled:false,
    //     originalPrice:599,
    //     imgUrl:'../../image/glasses3.png',
    //     comments:12345
    //   }
    // ],
    itemWidth:207,
    searchContent:'',
    searchInput:'',
    recommend:[
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:1361
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:1128
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:true,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:910
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:13610
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:true,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:678
      },
      {
        name:'开普勒 钛架-全框',
        price:299,
        isNew:false,
        isSaled:false,
        originalPrice:599,
        imgUrl:'../../image/glasses3.png',
        comments:12345
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchContent:options.searchInput
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
          recommend: res.data.data
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
  //前往商品详情页
  goToProductDetail:function(e){
    let id = e.currentTarget.dataset.id;
    //待修改
    wx.navigateTo({
      url: '../productDetail/productDetail',
    })
  },

  onInputChange:function(e){
    this.setData({
      searchInput:e.detail.value
    });
  },

  onCancel:function(){
    this.setData({
      searchInput:''
    })
  },

  onSearch:function(e){
    if (this.data.searchInput!=''){
      wx.navigateTo({
        url: '../searchResult/searchResult?searchInput='+this.data.searchInput,
      })
    }
  },
})