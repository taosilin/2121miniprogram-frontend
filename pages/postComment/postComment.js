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
    fileList:[],
    commentContent:[]
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
        //console.log(res.data.data)
        let evaluation = [];
        let fileList = [];
        let commentContent = [];
        for (let i=0;i<res.data.data.frames.length;i++){
          evaluation.push("5");
          fileList.push(new Array());
          commentContent.push("");
        }
        _this.setData({
          orderDetail: res.data.data,
          evaluation: evaluation,
          fileList: fileList,
          commentContent: commentContent
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
  
  // 用户输入评论内容
  onContentChange:function(e){
    //console.log(e);
    let id = e.currentTarget.dataset.id;
    let commentContent = this.data.commentContent;
    commentContent[id] = e.detail.value;
    this.setData({
      commentContent: commentContent
    });
  },

  // 上传评价图片的回调
  afterRead(event) {
    var id = event.currentTarget.dataset.id;
    const { file } = event.detail;
    var _this = this;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: app.globalData.host+'/comment/uploadImage', 
      filePath: file.url,
      name: 'imageFile',
      formData: { imageFile: file.url },
      success(res) {
        // console.log(res);
        //上传完成需要更新 fileList
        let fileList = _this.data.fileList;
        fileList[id].push({ ...file, url: res.data });
        _this.setData({ fileList:fileList });
      },
    });
  },

  // 删除图片的回调
  afterDelete(event) {
    var id = event.currentTarget.dataset.id;
    var index = event.detail.index;
    var fileList = this.data.fileList;

    fileList[id].splice(index,1);
    this.setData({
      fileList: fileList
    })
  },

  // 发表评价
  onPostComment:function(e){
    //console.log(this.data.fileList)
    var _this = this;
    
    for (let i=0;i<this.data.orderDetail.frames.length;i++){
      let commentPhoto = new Array();
      if (!this.data.commentContent[i]){
        let commentContent = this.data.commentContent
        commentContent[i] = "此用户没有填写评价。"
        this.setData({
          commentContent:commentContent
        })
      }
      if (this.data.fileList[i].length>0){
        for (let j=0;j<this.data.fileList[i].length;j++){
          commentPhoto.push(this.data.fileList[i][j].url);
        }
      }
      
      let commentID = (new Date()).getTime().toString()+(Math.floor((Math.random()*10000000)+1000000)).toString();
      wx.request({
        url: app.globalData.host+'/comment/add',
        data:{
          commentID: commentID,
          orderID: this.data.orderDetail.order.orderID,
          productID: this.data.orderDetail.frames[i].frameID,
          userID: app.globalData.openid,
          commentTime: (new Date()).getTime(),
          commentContent: this.data.commentContent[i],
          evaluation: this.data.evaluation[i],
          commentPhoto: commentPhoto.join(","),
          state: "0",
          specID: this.data.orderDetail.frames[i].specID,
          lensID: this.data.orderDetail.frames[i].lensID
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          //console.log("评论成功！");
          wx.showToast({
            title: '评论成功！',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
    wx.navigateBack({
      delta: 1
    })
  }
})