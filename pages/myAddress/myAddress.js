// pages/myAddress/myAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      addresses:[
      {
        name:"好汉陶",
        tel:"18916273661",
        province:"上海市",
        city:"上海市",
        district:"嘉定区",
        detail:"曹安公路4800号",
        isDefault:true
      } ,
      {
        name:"陶陶子",
        tel:"18916273661",
        province:"上海市",
        city:"上海市",
        district:"杨浦区",
        detail:"四平路1239号",
        isDefault:false
      } ,
      {
        name:"思霖姐",
        tel:"18916273661",
        province:"上海市",
        city:"上海市",
        district:"长宁区",
        detail:"福泉北路518号",
        isDefault:false
      } 
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  goToAddAddress:function(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },
  onChangeAddress:function(e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    var info = JSON.stringify(this.data.addresses[id]);
    console.log(info);
    wx.navigateTo({
      url: '../addAddress/addAddress?info='+info,
    });
  }
})