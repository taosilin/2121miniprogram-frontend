// pages/myOrders/myOrders.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[],
    ordersfilter:[],
    recommend:[],
    windowHeight:896,
    tabs:['全部', '待付款', '待收货', '待评价', '售后'],
    selectTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var _this = this;
    this.setData({
      selectTab:options.index,
      windowHeight: sysInfo.windowHeight
    })
    wx.request({
      url: app.globalData.host + '/order/userlist',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        //console.log(res.data.data)
        let orders = res.data.data;
        for (let i=0;i<orders.length;i++){
          orders[i].order.orderTime = orders[i].order.orderTime.slice(0,10)
        }
        _this.setData({
          orders: orders
        })
        _this.orderFilter();
      },
      fail: function (res) {
        console.log(res);
      }
    })
    wx.request({
      url: app.globalData.host+'/frame/list',
      data: {
        page: 0,
        size: 4
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        //console.log(res.data.data)
        _this.setData({
          recommend: res.data.data
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
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.request({
      url: app.globalData.host + '/order/userlist',
      data:{
        userID: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        //console.log(res.data.data)
        let orders = res.data.data;
        for (let i=0;i<orders.length;i++){
          orders[i].order.orderTime = orders[i].order.orderTime.slice(0,10)
        }
        _this.setData({
          orders: orders
        })
        _this.orderFilter();
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

  // 打开定制信息弹窗
  openPopup:function(e){
    //console.log(e);
    let i = e.currentTarget.dataset.i;
    let j = e.currentTarget.dataset.j;
    let customInfo = {
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    };
    customInfo.leftEyeDegree = this.data.ordersfilter[i].frames[j].leftDegree.toFixed(2).toString();
    customInfo.rightEyeDegree = this.data.ordersfilter[i].frames[j].rightDegree.toFixed(2).toString();
    customInfo.interpupillaryDistance = this.data.ordersfilter[i].frames[j].interpupillary;
    customInfo.leftEyeAstigmatism = this.data.ordersfilter[i].frames[j].leftAstigmatism.toFixed(2).toString();
    customInfo.rightEyeAstigmatism = this.data.ordersfilter[i].frames[j].rightAstigmatism.toFixed(2).toString();
    customInfo.leftEyeAxis = this.data.ordersfilter[i].frames[j].leftAxis;
    customInfo.rightEyeAxis = this.data.ordersfilter[i].frames[j].rightAxis;
    this.setData({
      customInfo: customInfo
    })
    this.popup.showPopup();
  },

  //tab选项改变
  onTabChange:function(e){
    this.setData({
      selectTab:e.detail
    })
    this.orderFilter();
  },

  // 订单按状态筛选
  orderFilter:function(){
    if (this.data.selectTab==0){
      this.setData({
        ordersfilter: this.data.orders
      })
    }
    else if(this.data.selectTab==1){
      let orders = [];
      for (let i=0;i<this.data.orders.length;i++){
        if (this.data.orders[i].order.state=='1'){
          orders.push(this.data.orders[i]);
        }
      } 
      this.setData({
        ordersfilter:orders
      });
    }
    else if (this.data.selectTab==2){
      let orders = [];
      for (let i=0;i<this.data.orders.length;i++){
        if (this.data.orders[i].order.state=='2'||this.data.orders[i].order.state=='3'||this.data.orders[i].order.state=='4'||this.data.orders[i].order.state=='5'){
          orders.push(this.data.orders[i]);
        }
      } 
      this.setData({
        ordersfilter:orders
      });
    }
    else if (this.data.selectTab==3){
      let orders = [];
      for (let i=0;i<this.data.orders.length;i++){
        if (this.data.orders[i].order.state=='6'||this.data.orders[i].order.state=='7'){
          orders.push(this.data.orders[i]);
        }
      } 
      this.setData({
        ordersfilter:orders
      });
    }
    else{
      let orders = [];
      for (let i=0;i<this.data.orders.length;i++){
        if (this.data.orders[i].order.state=='9'||this.data.orders[i].order.state=='10'||this.data.orders[i].order.state=='11'||this.data.orders[i].order.state=='12'){
          orders.push(this.data.orders[i]);
        }
      } 
      this.setData({
        ordersfilter:orders
      });
      //console.log(this.data.ordersfilter.length)
    }
  },

  // 订单详情
  onOrderDetail:function(e){
    wx.navigateTo({
      url: '../orderDetail/orderDetail?orderID='+e.currentTarget.dataset.id,
    });
  },

  // 取消订单
  cancelOrder:function(e){
    var _this = this;

    wx.showModal({
      title: '警告',
      content: '确定取消该订单？此操作不可恢复',
      success(res) {
        if (res.confirm) {
          //console.log('确定取消');
          wx.request({
            url: app.globalData.host+'/order/updatestate',
            data: {
              orderID: e.currentTarget.dataset.id,
              state: "8"
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              _this.onShow();
              wx.showToast({ title: '已取消订单', icon: 'none' });
            },
            fail: function (res) {
              console.log(res);
            }
          })
        } else if (res.cancel) {
          //console.log('取消取消')
        }
      }
    });

  },
  // 申请退款
  applyRefund:function(e){
    var id = e.currentTarget.dataset.id;
    var info = JSON.stringify({
      order:{
        orderID:this.data.ordersfilter[id].order.orderID
      },
      frames:this.data.ordersfilter[id].frames
    });
    wx.navigateTo({
      url: '../applyRefund/applyRefund?orderDetail='+info,
    });
  },

  // 申请退货
  applyReturn:function(e){
    var id = e.currentTarget.dataset.id;
    var info = JSON.stringify({
      order:{
        orderID:this.data.ordersfilter[id].order.orderID
      },
      frames:this.data.ordersfilter[id].frames
    });
    wx.navigateTo({
      url: '../applyReturn/applyReturn?orderDetail='+info,
    });
  },

  // 确认收货
  confirmReceive:function(e){
    var _this = this;

    wx.showModal({
      title: '提示',
      content: '确认收货？',
      success(res) {
        if (res.confirm) {
          //console.log('确认收货');
          wx.request({
            url: app.globalData.host+'/order/updatestate',
            data: {
              orderID: e.currentTarget.dataset.id,
              state: "7"
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              _this.onShow();
              wx.showToast({ title: '已确认收货', icon: 'none' });
            },
            fail: function (res) {
              console.log(res);
            }
          })
        } else if (res.cancel) {
          //console.log('取消确认')
        }
      }
    });
  },

  // 去评价
  postComment:function(e){
    wx.navigateTo({
      url: '../postComment/postComment?orderID='+e.currentTarget.dataset.id,
    });
  },

  // 查看物流
  logisticsDetail:function(e){
    wx.navigateTo({
      url: '../logisticsDetail/logisticsDetail?courierID='+e.currentTarget.dataset.id,
    });
  },

  //前往商品详情页
  goToProductDetail:function(e){
    let id = e.currentTarget.dataset.id;
    //待修改
    wx.navigateTo({
      url: '../productDetail/productDetail?frameID='+id,
    })
  },
  
  // 联系客服
  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },

  // 去付款
  goToPay:function(e){
    //console.log(e)
    var orderID = e.currentTarget.dataset.orderid;
    var prepayID = JSON.parse(e.currentTarget.dataset.prepayid);

    //  调用微信支付
    wx.requestPayment({
      'timeStamp': prepayID.timeStamp,
      'nonceStr': prepayID.nonceStr,
      'package': prepayID.package,
      'signType': 'MD5',
      'paySign': prepayID.sign,
      'success':function(res){
        // 支付成功
        console.log(res)
        wx.request({
          url: app.globalData.host+'/order/updatestate',
          data:{
            orderID: orderID,
            state: "2"
          },
          method: 'POST',
          header: {
            'content-type': 'application/json'//默认值
          },
          success: function (response) {
            
          },
          fail: function (error) {
            console.log(error);
          }
        })
        // 跳转到支付成功页面
        wx.redirectTo({
          url: '../paymentSuccessful/paymentSuccessful'
        })
      },
      fail: function (res) {
        // 支付失败
        console.log(res)
        console.log("支付失败")
      },
    })
  },

  // 加入购物车
  addCart:function(e){
    let id = e.currentTarget.dataset.id
    let frames = this.data.ordersfilter[id].frames;
    for (let i=0;i<frames.length;i++){
      wx.request({
        url: app.globalData.host+'/cart/add',
        data:{
          userID: app.globalData.openid,
          productID: frames[i].frameID,
          specID: frames[i].specID,
          num: frames[i].num,
          lensID: frames[i].lensID,
          leftDegree: frames[i].leftDegree,
          rightDegree: frames[i].rightDegree,
          interpupillary: frames[i].interpupillary,
          leftAstigmatism: frames[i].leftAstigmatism,
          rightAstigmatism: frames[i].rightAstigmatism,
          leftAxis: frames[i].leftAxis,
          rightAxis: frames[i].rightAxis
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
    }
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    });
  }
})