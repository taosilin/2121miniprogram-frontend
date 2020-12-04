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
    disabledCoupons:[],
    remark: '', // 买家备注
    fromCart: false
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
    if (options.fromCart){
      this.setData({
        fromCart: true
      })
    }
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

  // 用户输入订单备注
  onRemarkChange:function(e){
    this.setData({
      remark:e.detail.value
    })
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
    if (this.data.address==null){
      wx.showToast({
        title: '请选择地址',
        icon: 'none',
        duration: 2000
      })
    }else{
      let orderID = (new Date()).getTime().toString()+app.globalData.phoneNumber
      // console.log(orderID)
      // console.log(this.data.address)
      // console.log(this.data.coupon)
      // console.log(this.data.buySpec)
      // console.log(this.data.totalAmount)
      // console.log(this.data.actualAmount)
      let order = {
        orderID: orderID,
        userID: app.globalData.phoneNumber,
        addressID: this.data.address.addressID,
        couponID: (this.data.coupon?this.data.coupon.couponID:null),
        totalAmount: this.data.totalAmount,
        actualPayment: this.data.actualAmount,
        orderTime: (new Date()).getTime(),
        state: "1",
        remark: this.data.remark
      }
      let orderFrames = new Array();
      for (let i=0;i<this.data.buySpec.length;i++){
        let orderFrame = {
          orderID: orderID,
          frameID: this.data.buySpec[i].frame.frameID,
          lensID: this.data.buySpec[i].cart.lensID,
          specID: this.data.buySpec[i].spec.specID,
          state:"1",
          num: this.data.buySpec[i].cart.num,
          price: this.data.buySpec[i].spec.price,
          leftDegree: this.data.buySpec[i].cart.leftDegree,
          rightDegree: this.data.buySpec[i].cart.rightDegree,
          interpupillary: this.data.buySpec[i].cart.interpupillary,
          leftAstigmatism: this.data.buySpec[i].cart.leftAstigmatism,
          rightAstigmatism: this.data.buySpec[i].cart.rightAstigmatism,
          leftAxis: this.data.buySpec[i].cart.leftAxis,
          rightAxis: this.data.buySpec[i].cart.rightAxis
        }
        orderFrames.push(orderFrame);
      }

      var _this = this;

      wx.request({
        url: app.globalData.host+'/order/add',
        data:{
          order:order,
          orderFrames:orderFrames
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          wx.navigateBack({
            delta: 1
          });
          //处理添加订单
          wx.showToast({
            title: '已下单',
            icon: 'success',
            duration: 2000
          });

          //从购物车中删除
          for (let i=0;i<_this.data.buySpec.length;i++){
            wx.request({
              url: app.globalData.host+'/cart/delete',
              data:{
               userID: app.globalData.phoneNumber,
               productID: _this.data.buySpec[i].spec.productID,
               specID: _this.data.buySpec[i].spec.specID,
               lensID: _this.data.buySpec[i].lens.lensID,
               leftDegree: _this.data.buySpec[i].cart.leftDegree,
               rightDegree: _this.data.buySpec[i].cart.rightDegree,
               interpupillary: _this.data.buySpec[i].cart.interpupillary,
               leftAstigmatism: _this.data.buySpec[i].cart.leftAstigmatism,
               rightAstigmatism: _this.data.buySpec[i].cart.rightAstigmatism,
               leftAxis: _this.data.buySpec[i].cart.leftAxis,
               rightAxis: _this.data.buySpec[i].cart.rightAxis
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
          }

        },
        fail: function (res) {
          console.log("请求失败");
        }
      })
    }
    

  }
  ,
  // 返回上一页
  onReturn:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})