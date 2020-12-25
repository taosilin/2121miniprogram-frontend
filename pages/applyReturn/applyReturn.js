// pages/applyReturn/applyReturn.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 896,
    orderDetail: {},
    refundReason: [],
    description: [],
    fileList:[],
    reasonIndex: 0,
    customInfo: {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var orderDetail = JSON.parse(options.orderDetail);
    //console.log(orderDetail);
    let refundReason = [];
    let description = [];
    let fileList = [];
    for (let i=0;i<orderDetail.frames.length;i++){
      refundReason.push("")
      description.push("")
      fileList.push(new Array());
    }
    this.setData({
      windowHeight: sysInfo.windowHeight,
      orderDetail: orderDetail,
      refundReason: refundReason,
      description: description,
      fileList: fileList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
    this.refund = this.selectComponent("#refund");
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
  // 用户输入退款描述
  onDescriptionChange:function(e){
    this.setData({
      description:e.detail.value
    })
  },

  // 打开定制信息弹窗
  openPopup:function(e){
    let index = e.currentTarget.dataset.id;
    let customInfo = {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    };
    customInfo.leftEyeDegree = this.data.orderDetail.frames[index].leftDegree;
    customInfo.rightEyeDegree = this.data.orderDetail.frames[index].rightDegree;
    customInfo.interpupillaryDistance = this.data.orderDetail.frames[index].interpupillary;
    customInfo.leftEyeAstigmatism = this.data.orderDetail.frames[index].leftAstigmatism;
    customInfo.rightEyeAstigmatism = this.data.orderDetail.frames[index].rightAstigmatism;
    customInfo.leftEyeAxis = this.data.orderDetail.frames[index].leftAxis;
    customInfo.rightEyeAxis = this.data.orderDetail.frames[index].rightAxis;
    this.setData({
      customInfo: customInfo
    })
    this.popup.showPopup();
  },

  // 选择退款原因
  openRefundReason:function(e){
    this.setData({
      reasonIndex: e.currentTarget.dataset.id
    })
    this.refund.setData({
      flag: false
    })
  },
  // 选择退款原因的回调函数
  chooseReason:function(e){
    let refundReason = this.data.refundReason;
    refundReason[this.data.reasonIndex] = e.detail
    this.setData({
      refundReason: refundReason
    })
  },
  // 用户输入退款描述
  onDescriptionChange:function(e){
    let description = this.data.description;
    description[e.currentTarget.dataset.id] = e.detail.value
    this.setData({
      description:description
    })
  },
  // 上传图片的回调
  afterRead(event) {
    var id = event.currentTarget.dataset.id;
    const { file } = event.detail;
    var _this = this;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: app.globalData.host+'/refund/uploadImage', 
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

  // 申请退款
  onConfirm:function(e){
    var _this = this;

    wx.request({
      url: app.globalData.host+'/order/updatestate',
      data: {
        orderID: this.data.orderDetail.order.orderID,
        state: "11"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
      
      },
      fail: function (res) {
        console.log(res);
      }
    })

    for (let i=0;i<this.data.orderDetail.frames.length;i++){
      let refundImage = new Array();
      if (this.data.fileList[i].length>0){
        for (let j=0;j<this.data.fileList[i].length;j++){
          refundImage.push(this.data.fileList[i][j].url);
        }
      }
      
      let refundID = (new Date()).getTime().toString()+(Math.floor((Math.random()*10000000)+1000000)).toString();
      wx.request({
        url: app.globalData.host+'/refund/add',
        data:{
          refundID: refundID,
          orderID: this.data.orderDetail.order.orderID,
          productID: this.data.orderDetail.frames[i].frameID,
          specID: this.data.orderDetail.frames[i].specID,    
          lensID: this.data.orderDetail.frames[i].lensID,
          applicant: app.globalData.openid,
          amount: this.data.orderDetail.frames[i].actualPayment,
          reason: this.data.refundReason[i],
          description: this.data.description[i],
          state: "0",
          type: "1",
          updateTime: (new Date()).getTime(),
          refundImage: refundImage.join(","),
          num: this.data.orderDetail.frames[i].num,
          leftDegree: this.data.orderDetail.frames[i].leftDegree,
          rightDegree: this.data.orderDetail.frames[i].rightDegree,
          interpupillary: this.data.orderDetail.frames[i].interpupillary,
          leftAstigmatism: this.data.orderDetail.frames[i].leftAstigmatism,
          rightAstigmatism: this.data.orderDetail.frames[i].rightAstigmatism,
          leftAxis: this.data.orderDetail.frames[i].leftAxis,
          rightAxis: this.data.orderDetail.frames[i].rightAxis
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          wx.showToast({
            title: '已申请',
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