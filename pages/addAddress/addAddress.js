// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    tel:"",
    region:[],
    detail:"",
    isNew:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.info!=undefined){
      var info = JSON.parse(options.info);
      this.setData({
        name:info.name,
        tel:info.tel,
        region:[info.province,info.city,info.district],
        detail:info.detail,
        isNew:false
      })
    }
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
  onNameChange:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  onTelChange:function(e){
    this.setData({
      tel:e.detail.value
    })
  },
  onDetailChange:function(e){
    this.setData({
      detail:e.detail.value
    })
  },
  bindRegionChange:function(e){
    console.log("picker值变为",e.detail.value)
    this.setData({
      region:e.detail.value
    })
  },
  onSubmit:function(){
    console.log(this.data);
    wx.navigateBack({
      delta:1,
    });
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    });
  }
})