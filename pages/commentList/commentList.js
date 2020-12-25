// pages/commentList/commentList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/comment/frame',
      data: {
        productID: options.frameID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        // console.log(res.data.data);
        let commentList = res.data.data;
        for (let i=0;i<commentList.length;i++){
          commentList[i].comment.commentPhoto = commentList[i].comment.commentPhoto.split(',');
        }
        _this.setData({
          commentList: commentList
        });
        //console.log(_this.data.commentList);
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
  // 放大预览图片
  preview:function(e){
    //console.log(e)
    let currentUrl = e.currentTarget.dataset.src;
    let id = e.currentTarget.dataset.id;
    wx.previewImage({
      current:currentUrl,
      urls: this.data.commentList[id].comment.commentPhoto,
    })
  }
})