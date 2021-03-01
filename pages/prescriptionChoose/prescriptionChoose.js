// pages/prescriptionChoose/prescriptionChoose.js
const app = getApp();
const interpupillarys=[
  {
    frameID:"4B01_1",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4B01_3",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4B01_4",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4C01_1",
    myopia:[58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4C01_3",
    myopia:[58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4C01_4",
    myopia:[58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7002A_2",
    myopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[72,73,74,75,76,77]
  },
  {
    frameID:"7002A_3",
    myopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[72,73,74,75,76,77]
  },
  {
    frameID:"7002B_1",
    myopia:[54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
  },
  {
    frameID:"7002B_2",
    myopia:[54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
  },
  {
    frameID:"7002B_3",
    myopia:[54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
  },
  {
    frameID:"7002B_4",
    myopia:[54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
  },
  {
    frameID:"7002C_1",
    myopia:[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7002C_2",
    myopia:[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7002C_3",
    myopia:[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7002C_4",
    myopia:[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4106A_1",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77]
  },
  {
    frameID:"4106A_2",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77]
  },
  {
    frameID:"4106A_4",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77]
  },
  {
    frameID:"4106B_1",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76]
  },
  {
    frameID:"4106B_2",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76]
  },
  {
    frameID:"4106B_4",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76]
  },
  {
    frameID:"4106C_1",
    myopia:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4106C_2",
    myopia:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4106C_3",
    myopia:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7001A_1",
    myopia:[59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77,78]
  },
  {
    frameID:"7001A_3",
    myopia:[59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77,78]
  },
  {
    frameID:"7001A_4",
    myopia:[59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77,78]
  },
  {
    frameID:"7001A_5",
    myopia:[59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[70,71,72,73,74,75,76,77,78]
  },
  {
    frameID:"7001B_1",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7001B_3",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7001B_4",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"7001B_5",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9106_1",
    myopia:[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9106_2",
    myopia:[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9107_1",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[67,68,69,70,71,72,73,74,75,76]
  },
  {
    frameID:"9107_2",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[67,68,69,70,71,72,73,74,75,76]
  },
  {
    frameID:"9107_4",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[67,68,69,70,71,72,73,74,75,76]
  },
  {
    frameID:"9108_1",
    myopia:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[64,65,66,67,68,69,70,71,72,73,74,75]
  },
  {
    frameID:"9108_2",
    myopia:[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[64,65,66,67,68,69,70,71,72,73,74,75]
  },
  {
    frameID:"9109_1",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9109_3",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9109_4",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9110_1",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]
  },
  {
    frameID:"9110_4",
    myopia:[51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]
  },
  {
    frameID:"9113_1",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"9113_2",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"6101_5",
    myopia:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[73]
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescriptions: [],
    isChecked: [true],
    checkIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: app.globalData.host+'/prescription/list',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          prescriptions: res.data.data
        });
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
    var _this = this;
    wx.request({
      url: app.globalData.host+'/prescription/list',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          prescriptions: res.data.data
        });
      },
      fail: function (res) {
        console.log(res);
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
  // 选择验光单
  radioChange:function(e){
    this.setData({
      checkIndex: e.detail.value
    })
    console.log(e.detail.value)
  },
  // 确认选择
  confirmChoose:function(){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    if (this.data.prescriptions[this.data.checkIndex].leftDegree>0||this.data.prescriptions[this.data.checkIndex].rightDegree>0){
      var interpupillary = interpupillarys.filter(item => {
        return item.frameID==prevPage.addCart.properties.frame.frameID
      })
      prevPage.addCart.setData({
        interpupillarys: interpupillary[0].hyperopia,
        interpupillary: null,
        prescriptionID: null
      })
    }
    else{
      var interpupillary = interpupillarys.filter(item => {
        return item.frameID==prevPage.addCart.properties.frame.frameID
      })
      prevPage.addCart.setData({
        interpupillarys: interpupillary[0].myopia,
        interpupillary: null,
        prescriptionID: null
      })
    }
    if (prevPage.addCart.data.interpupillarys.includes(this.data.prescriptions[this.data.checkIndex].interpupillary)){
      prevPage.addCart.setData({
        prescriptionID: this.data.prescriptions[this.data.checkIndex].prescriptionID,
        prescriptionName: this.data.prescriptions[this.data.checkIndex].prescriptionName,
        leftDegree: this.data.prescriptions[this.data.checkIndex].leftDegree,
        rightDegree: this.data.prescriptions[this.data.checkIndex].rightDegree,
        interpupillary: this.data.prescriptions[this.data.checkIndex].interpupillary,
        leftAstigmatism: this.data.prescriptions[this.data.checkIndex].leftAstigmatism,
        rightAstigmatism: this.data.prescriptions[this.data.checkIndex].rightAstigmatism,
        leftAxis: this.data.prescriptions[this.data.checkIndex].leftAxis,
        rightAxis: this.data.prescriptions[this.data.checkIndex].rightAxis,
      });
      prevPage.buyNow.setData({
        prescriptionID: this.data.prescriptions[this.data.checkIndex].prescriptionID,
        prescriptionName: this.data.prescriptions[this.data.checkIndex].prescriptionName,
        leftDegree: this.data.prescriptions[this.data.checkIndex].leftDegree,
        rightDegree: this.data.prescriptions[this.data.checkIndex].rightDegree,
        interpupillary: this.data.prescriptions[this.data.checkIndex].interpupillary,
        leftAstigmatism: this.data.prescriptions[this.data.checkIndex].leftAstigmatism,
        rightAstigmatism: this.data.prescriptions[this.data.checkIndex].rightAstigmatism,
        leftAxis: this.data.prescriptions[this.data.checkIndex].leftAxis,
        rightAxis: this.data.prescriptions[this.data.checkIndex].rightAxis,
      });
      wx.navigateBack({
        delta: 1
      });
    }
    else{
      wx.showToast({
        title: '您的瞳距不在该镜框可配的瞳距范围内，如需购买，请联系客服',
        icon: 'none',
        duration: 2000
      });
    } 
  }
})