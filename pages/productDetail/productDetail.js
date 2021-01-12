// pages/productDetail/productDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    phoneNumber: null,

    frameDetail: null,
    specs: null,
    colors: null,
    selectSpec: 0,
    goodRating: null,
    newComment: null, // 最新一条评论

    indicatorDots: true,//显示指示点
    autoplay: false,//自动播放
    interval: 3000,
    duration: 500,
    circular:true, //衔接滑动
    windowWidth:414,
    actionSheetOpen:false,
    isLike: false,
    likeVisible: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth:sysInfo.windowWidth
    })
    if (app.globalData.phoneNumber!=null){  
      this.setData({phoneNumber: app.globalData.phoneNumber});
      this.setData({userInfo: app.globalData.userInfo});
    }
    wx.request({
      url: app.globalData.host+'/frame/detail',
      data: {
        frameID: options.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        let imageList = res.data.data.frame.imageList.split(",");
        let description = res.data.data.frame.description.split(",");
        let frameDetail = res.data.data.frame;
        frameDetail.imageList = imageList;
        frameDetail.description = description;
        _this.setData({
          frameDetail: frameDetail,
          specs: res.data.data.specs,
          colors: res.data.data.colors
        })      
      },
      fail: function (res) {
        console.log(res);
      }
    })

    wx.request({
      url: app.globalData.host+'/comment/productCommentByProductID/'+options.frameID,
      method: 'GET',
      success: function (res) {
        //console.log(res.data.data)
        _this.setData({
          goodRating: res.data.data
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })

    wx.request({
      url: app.globalData.host+'/comment/latest',
      data: {
        productID: options.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        if (res.data.data!=null){
          let newComment = res.data.data;
          if (newComment.comment.commentPhoto!=""){
            let commentPhoto = newComment.comment.commentPhoto.split(',');
            newComment.comment.commentPhoto = commentPhoto;
          }
          else{
            newComment.comment.commentPhoto = null
          }
          _this.setData({
            newComment: newComment
          });
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })

    wx.request({
      url: app.globalData.host+'/like/findUserIsLike',
      data: {
        userID: app.globalData.openid,
        productID: options.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          isLike: res.data.data
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
    //获得actionSheet组件
    this.addCart = this.selectComponent("#addCart");
    this.buyNow = this.selectComponent("#buyNow");
    //获得dialog组件
    this.getUserInfo = this.selectComponent("#getUserInfo");
    this.getPhoneNumber = this.selectComponent("#getPhoneNumber");
    this.servicePopup = this.selectComponent("#servicePopup");
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

  // 滑动
  onSlideChange: function (event) { 
    this.setData({
      selectSpec: event.detail.current
    });
  },
  // 点击SKU缩略图
  onSpecChange(e){
    this.setData({
      selectSpec: e.currentTarget.dataset.id
    })
  },

  goToShoppingCart: function(){
    wx.switchTab({
      url: '../shoppingCart/shoppingCart'
    });
  },
  onAddCart: function(){
    this.addCart.showSheet();
  },
  onBuyNow: function(){
    this.buyNow.showSheet();
  },
  // 添加到收藏夹
  onAddLike: function(){
    var _this = this;
    wx.request({
      url: app.globalData.host + '/like/add',
      data: {
        userID: app.globalData.openid,
        productID: this.data.frameDetail.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          isLike: true,
          likeVisible: false
        })
        setTimeout(function(){
          _this.setData({
            likeVisible: true
          })
        },1500)
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  // 取消收藏
  onDeleteLike: function(){
    var _this = this;
    wx.request({
      url: app.globalData.host + '/like/delete',
      data: {
        userID: app.globalData.openid,
        productID: this.data.frameDetail.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          isLike: false
        })
        wx.showToast({
          title: '取消收藏',
          icon: 'none',
          duration: 2000
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  // 登录
  onLogin:function(){
    this.getUserInfo.setData({
      flag:false
    })
  },
  // 获取用户微信信息
  bindgetuserinfo: function(e){
    // var _this = this;
    //console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail
    })
    this.getPhoneNumber.setData({
      flag: false
    })
  },

  // 跳转商品评论列表页
  goCommentList:function(){
    wx.navigateTo({
      url: '../commentList/commentList?frameID=' + this.data.frameDetail.frameID,
    })
  },

  // 打开服务说明
  openServicePopup:function(e){
    this.servicePopup.setData({
      flag: false
    })
  },
  // 联系客服
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  // 放大预览图片
  preview:function(e){
    //console.log(e)
    let currentUrl = e.currentTarget.dataset.src;
    wx.previewImage({
      current:currentUrl,
      urls: this.data.frameDetail.imageList,
    })
  }
})