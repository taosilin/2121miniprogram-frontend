// pages/shoppingCart/shoppingCart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[],
    windowWidth:414,
    imgWidth:264,
    productWidth:103,
    contentWidth:230,
    checkbox: [], // 多选框
    checkboxBool: [],
    selectAll: false,  // 全选
    total: 0  // 合计总价
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var _this = this;
    this.setData({
      windowWidth:sysInfo.windowWidth,
      imgWidth:sysInfo.windowWidth*0.637,
      productWidth:sysInfo.windowWidth*0.24879,
      contentWidth:sysInfo.windowWidth*0.5
    })

    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          productList: res.data.data
        });
        var checkboxBool = new Array();
        for (let i=0;i<res.data.data.length;i++){
          checkboxBool.push(false);
        }
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
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          productList: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
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
  // 多选框选项变化
  checkboxChange: function(e) {
    console.log(e.detail.value);
    let checkboxBool = this.data.checkboxBool;

    if (e.detail.value.length==this.data.productList.length){
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = true;
      }
      this.setData({
        selectAll: true
      });
    }
    else if (e.detail.value.length==0){
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = false;
      }
      this.setData({
        selectAll: false
      });
    }
    else{
      for (let i=0;i<this.data.productList.length;i++){
        if (e.detail.value.indexOf(i.toString())!=-1){
          checkboxBool[i] = true;
        }
        else{
          checkboxBool[i] = false;
        }    
      }
      this.setData({
        selectAll: false
      });
    }
    this.setData({
      checkbox: e.detail.value,
      checkboxBool: checkboxBool
    });

    this.computeTotal();
  },

  // 全选or取消全选
  selectAll:function(){
    var checkbox = new Array();
    var checkboxBool = this.data.checkboxBool;
    if (this.data.checkbox.length<this.data.productList.length){
      // 全选
      for (let i=0;i<this.data.productList.length;i++){
        checkbox.push(i.toString());
        checkboxBool[i] = true;
      }    
    }
    else{
      // 取消全选
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = false;
      } 
    }

    this.setData({
      checkbox: checkbox,
      checkboxBool: checkboxBool
    });

    this.computeTotal();
  },

  openPopup:function(){
    this.popup.showPopup();
  },

  // 商品数量变化
  onNumChange:function(e){
    let id = e.currentTarget.dataset.id;

    var tmp = this.data.productList;
    tmp[id].cart.num = e.detail;
    this.setData({
      productList: tmp
    });


    wx.request({
      url: app.globalData.host+'/cart/update',
      data:{
        userID: app.globalData.phoneNumber,
        productID: this.data.productList[id].spec.productID,
        specID: this.data.productList[id].spec.specID,
        num: e.detail
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
    this.computeTotal();
  },

  // 计算合计总价
  computeTotal:function(){
    let total = 0;
    for (let i=0;i<this.data.checkbox.length;i++){
      let index = Number(this.data.checkbox[i]);
      total = total + this.data.productList[index].spec.price*this.data.productList[index].cart.num;
    }
    this.setData({
      total: total
    })
  }

})