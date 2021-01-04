// pages/orderDetail/orderDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderDetail:{},
    logisticsDetail:null,
    latestLogistics:null,
    stateText:"",
    stateTime:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        _this.setData({
          orderDetail: res.data.data
        })
        if (parseInt(res.data.data.order.state)>=5){
          wx.request({
            url: app.globalData.host+'/logistics',
            data: {
              "com":"shunfeng",
              "num":res.data.data.order.courierID
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              //console.log(res)
              let logistics = JSON.parse(res.data.data);
              if (logistics.message=="ok"){
                _this.setData({
                  logisticsDetail: logistics,
                  latestLogistics: logistics.data[0].context.substr(0,15)
                })
              }

            },
            fail: function (res) {
              console.log(res);
            }
          })
        }
        else{
          let now = (new Date()).getTime()
          let orderTime = new Date(res.data.data.order.orderTime)
          let time = (now - orderTime)/60000
          _this.setData({
            stateTime: _this.formatDate(now)
          })
          if (time<108){
            _this.setData({
              stateText:"小J老板已接单"
            })
          }
          else if (time<=206){
            _this.setData({
              stateText:"验光狮扫描定制信息中"
            })
          }
          else if (time<=294){
            _this.setData({
              stateText:"5D光刻机生产眼镜中"
            })
          }
          else if (time<=372){
            _this.setData({
              stateText:"验光狮检验成品中"
            })
          }
          else if (time<=440){
            _this.setData({
              stateText:"万金油在做最后的调试"
            })
          }
          else{
            _this.setData({
              stateText:"包裹已乘坐时光机发往2021年"
            })
          }
        }
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
  // 申请退款
  applyRefund:function(e){
    let id = e.currentTarget.dataset.id;
    let item = this.data.orderDetail.frames[id];
    let frames = new Array();
    frames.push(item);
    let info = {
      order: {
        orderID: this.data.orderDetail.order.orderID
      },
      frames: frames
    }
    info = JSON.stringify(info);
    wx.navigateTo({
      url: '../applyRefund/applyRefund?orderDetail='+info,
    });
  },
  // 申请退货
  applyReturn:function(e){
    let id = e.currentTarget.dataset.id;
    let item = this.data.orderDetail.frames[id];
    let frames = new Array();
    frames.push(item);
    let info = {
      order: {
        orderID: this.data.orderDetail.order.orderID
      },
      frames: frames
    }
    info = JSON.stringify(info);
    wx.navigateTo({
      url: '../applyReturn/applyReturn?orderDetail='+info,
    });
  },
  // 物流详情
  logisticsDetail:function(e){
    wx.navigateTo({
      url: '../logisticsDetail/logisticsDetail?courierID='+this.data.orderDetail.order.courierID,
    });
  },
  //时间戳转换方法    date:时间戳数字
  formatDate:function(date) {
    var date = new Date(date);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD +" "+hh + mm + ss;
  }
})