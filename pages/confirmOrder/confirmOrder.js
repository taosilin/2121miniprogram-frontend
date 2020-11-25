// pages/confirmOrder/confirmOrder.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    product:{
      name:"开普勒钛架全框眼镜",
      price:299,
      num:1,
      imgUrl:"../../image/glasses.jpg"
    },
    buySpec:[],
    customInfo: {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    },
    totalAmount: 0, // 商品总价
    actualAmount: 0, // 实际付款
    discount: 0, // 优惠金额
    coupon: null, //选择的优惠券
    enabledCoupons:[],
    disabledCoupons:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    console.log(JSON.parse(options.buySpec));
    this.setData({
      buySpec:JSON.parse(options.buySpec)
    });

    // 计算总价
    let total = 0;
    for (let i=0;i<this.data.buySpec.length;i++){
      total = total + this.data.buySpec[i].cart.num*this.data.buySpec[i].spec.price;
    }
    this.setData({
      totalAmount:total
    });

    // 计算实际付款
    if (this.data.coupon!=null){
      this.setData({
        actualAmount: this.data.totalAmount-this.data.coupon.discount
      })
    }
    else{
      this.setData({
        actualAmount: this.data.totalAmount
      })
    }
    
    var _this = this;
    wx.request({
      url: app.globalData.host+'/address/default',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          address: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })

    wx.request({
      url: app.globalData.host+'/usercoupon/enable',
      data:{
        userID: app.globalData.phoneNumber,
        totalAmount: this.data.totalAmount
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          enabledCoupons: res.data.data.enabledCoupons,
          disabledCoupons:res.data.data.disabledCoupons
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
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 计算实际付款
    if (this.data.coupon!=null){
      this.setData({
        actualAmount: this.data.totalAmount-this.data.coupon.discount
      })
    }
    else{
      this.setData({
        actualAmount: this.data.totalAmount
      })
    }
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
  goToCouponChoose:function(){
    let coupons = {
      enabledCoupons:this.data.enabledCoupons,
      disabledCoupons:this.data.disabledCoupons
    }
    wx.navigateTo({
      url: '../couponChoose/couponChoose?coupons='+JSON.stringify(coupons),
    })
  },
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
    customInfo.leftEyeDegree = this.data.buySpec[index].cart.leftDegree;
    customInfo.rightEyeDegree = this.data.buySpec[index].cart.rightDegree;
    customInfo.interpupillaryDistance = this.data.buySpec[index].cart.interpupillary;
    customInfo.leftEyeAstigmatism = this.data.buySpec[index].cart.leftAstigmatism;
    customInfo.rightEyeAstigmatism = this.data.buySpec[index].cart.rightAstigmatism;
    customInfo.leftEyeAxis = this.data.buySpec[index].cart.leftAxis;
    customInfo.rightEyeAxis = this.data.buySpec[index].cart.rightAxis;
    this.setData({
      customInfo:customInfo
    })
    this.popup.showPopup();
  },

  goAddressList:function(){
    wx.navigateTo({
      url: '../addressChoose/addressChoose',
    })
  },
  goAddAddress:function(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },
  // 立即支付
  onConfirm:function(){

  }
  
})