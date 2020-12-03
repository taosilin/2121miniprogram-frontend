// pages/likeList/likeList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeList: null,
    likeIcon: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/like/frame',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          likeList: res.data.data
        });
        let likeIcon = new Array();
        for (let i=0;i<_this.data.likeList.length;i++){
          likeIcon.push(true);
        }
        _this.setData({
          likeIcon: likeIcon
        });
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
  // 去逛逛
  onShop:function(e){
    wx.switchTab({
      url: '../shoppingMall/shoppingMall'
    });
  },
  // 跳转到镜框详情
  onFrameDetail(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../productDetail/productDetail?frameID=' + id
    })
  },

  // 取消收藏
  onDeleteLike(e){
    console.log(e);
    var _this = this;
    let id = e.currentTarget.dataset.id;
    let likeIcon = this.data.likeIcon;
    likeIcon[id] = !likeIcon[id]
    this.setData({
      likeIcon:likeIcon
    });
    setTimeout(function(){
      wx.request({
        url: app.globalData.host + '/like/delete',
        data:{
          userID: app.globalData.phoneNumber,
          productID: _this.data.likeList[id].frameID
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          console.log(res)
          let likeList = _this.data.likeList;
          let likeIcon = _this.data.likeIcon;
          likeList.splice(id,1);
          likeIcon.splice(id,1);
          _this.setData({
            likeList: likeList,
            likeIcon: likeIcon
          })
        },
        fail: function (res) {
          console.log("请求失败");
        }
      })
    },500)
  }
  
})