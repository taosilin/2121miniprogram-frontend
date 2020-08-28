// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{
      name:"开普勒·钛架-全框（含镜片）",
      subTitle:'选用高端航空专用钛 设计优雅',
      productionCycle:3,
      imgList:[
        '../../image/glasses4.png',
        '../../image/glasses4.png',
        '../../image/glasses4.png'
      ],
      smallImgList:[
        '../../image/glasses2.jpg',
        '../../image/glasses2.jpg',
        '../../image/glasses2.jpg'
      ],
      price:299,
      originalPrice:899
    },
    indicatorDots: true,//显示指示点
    autoplay: true,//自动播放
    interval: 3000,
    duration: 500,
    circular:true, //衔接滑动
    windowWidth:414,
    imgHeight:290,
    btnWidth:133,
    actionSheetOpen:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth,
      imgHeight:sysInfo.windowWidth*0.70048,
      btnWidth:sysInfo.windowWidth*0.32125  
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
  onSlideChange: function (event) { 
    var postId = event.detail.current; 
    // console.log(postId);
  },
  openActionSheet:function(){
    this.setData({
      actionSheetOpen:true
    })
  }
})