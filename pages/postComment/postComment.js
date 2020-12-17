// pages/postComment/postComment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 896,
    orderDetail: {},
    evaluation: [],
    fileList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowHeight: sysInfo.windowHeight
    })
    var _this = this;
    wx.request({
      url: app.globalData.host+'/order/detail',
      data:{
        orderID:options.orderID
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data.data)
        let evaluation = [];
        for (let i=0;i<res.data.data.frames.length;i++){
          evaluation.push("5");
        }
        _this.setData({
          orderDetail: res.data.data,
          evaluation: evaluation
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
  // 评五星
  onFiveStars:function(e){
    let index = e.currentTarget.dataset.id;
    let evaluation = this.data.evaluation;
    evaluation[index] = "5";
    this.setData({
      evaluation: evaluation
    });
  },

  //评四星
  onFourStars:function(e){
    let index = e.currentTarget.dataset.id;
    let evaluation = this.data.evaluation;
    evaluation[index] = "4";
    this.setData({
      evaluation: evaluation
    });
  },

   //评三星
   onThreeStars:function(e){
    let index = e.currentTarget.dataset.id;
    let evaluation = this.data.evaluation;
    evaluation[index] = "3";
    this.setData({
      evaluation: evaluation
    });
  },

   //评两星
   onTwoStars:function(e){
    let index = e.currentTarget.dataset.id;
    let evaluation = this.data.evaluation;
    evaluation[index] = "2";
    this.setData({
      evaluation: evaluation
    });
  },

   //评一星
   onOneStar:function(e){
    let index = e.currentTarget.dataset.id;
    let evaluation = this.data.evaluation;
    evaluation[index] = "1";
    this.setData({
      evaluation: evaluation
    });
  },
  
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },

  // // 上传评价图片的回调
  // afterRead(event) {
  //   const { file } = event.detail;
  //   // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  //   wx.uploadFile({
  //     url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
  //     filePath: file.url,
  //     name: 'file',
  //     formData: { user: 'test' },
  //     success(res) {
  //       // 上传完成需要更新 fileList
  //       const { fileList = [] } = this.data;
  //       fileList.push({ ...file, url: res.data });
  //       this.setData({ fileList });
  //     },
  //   });
  // }
})