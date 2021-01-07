// pages/addAddress/addAddress.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressID: "",
    receiver: null,
    telephone: null,
    region: [],
    detail: null,
    isNew: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.info!=undefined){
      var info = JSON.parse(options.info);
      this.setData({
        addressID: info.addressID,
        receiver: info.receiver,
        telephone: info.telephone,
        region: [info.province,info.city,info.district],
        detail: info.detail,
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
  onReceiverChange:function(e){
    this.setData({
      receiver:e.detail.value
    })
  },
  onTelChange:function(e){
    this.setData({
      telephone:e.detail.value
    })
  },
  onDetailChange:function(e){
    this.setData({
      detail:e.detail.value
    })
  },
  bindRegionChange:function(e){
    //console.log("picker值变为",e.detail.value)
    this.setData({
      region:e.detail.value
    })
  },

  // 提交新增地址
  onAdd: function(){
    var r = /^[·\-\s\w\u4e00-\u9fa5]*$/

    if (!r.test(this.data.receiver)||this.data.receiver.length<2||this.data.receiver.length>25) {
      wx.showToast({
        title: '收货人长度需要在2-25个汉字或字符之间，不能包含特殊字符',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.telephone.length!=11) {
      wx.showToast({
        title: '请输入11位手机号码',
        icon: 'none',
        duration: 2000
      });
    }
    else if (!r.test(this.data.detail)||this.data.detail.length<5||this.data.detail.length>120){
      wx.showToast({
        title: '详细地址长度需要在5-120个汉字或字符之间，不能包含特殊字符',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.receiver&&this.data.telephone&&this.data.region[0]&&this.data.region[1]&&this.data.region[2]&&this.data.detail){
      wx.request({
        url: app.globalData.host + '/address/add',
        data:{
          addressID: (new Date()).getTime().toString(),
          userID: app.globalData.openid,
          receiver: this.data.receiver,
          telephone: this.data.telephone,
          province: this.data.region[0],
          city: this.data.region[1],
          district: this.data.region[2],
          detail: this.data.detail,
          defaultAdd: "0"
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          wx.navigateBack({
            delta:1,
          });
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
    else{
      wx.showToast({
        title: '请完善地址信息',
        icon: 'none',
        duration: 2000
      });
    }
    
  },

  // 编辑地址
  onUpdate: function(){   
    var r = /^[·\-\s\w\u4e00-\u9fa5]*$/

    if (!r.test(this.data.receiver)||this.data.receiver.length<2||this.data.receiver.length>25){
      wx.showToast({
        title: '收货人长度需要在2-25个汉字或字符之间，不能包含特殊字符',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.telephone.length!=11) {
      wx.showToast({
        title: '请输入11位手机号码',
        icon: 'none',
        duration: 2000
      });
    }
    else if (!r.test(this.data.detail)||this.data.detail.length<5||this.data.detail.length>120){
      wx.showToast({
        title: '详细地址长度需要在5-120个汉字或字符之间，不能包含特殊字符',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.receiver&&this.data.telephone&&this.data.region[0]&&this.data.region[1]&&this.data.region[2]&&this.data.detail){
      wx.request({
        url: app.globalData.host + '/address/update',
        data: {
          addressID: this.data.addressID,
          receiver: this.data.receiver,
          telephone: this.data.telephone,
          province: this.data.region[0],
          city: this.data.region[1],
          district: this.data.region[2],
          detail: this.data.detail
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          wx.navigateBack({
            delta:1,
          });
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
    else{
      wx.showToast({
        title: '请完善地址信息',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 删除地址
  onDelete: function(){
    var _this = this;

    wx.showModal({
      title: '警告',
      content: '确定删除该地址？此操作不可恢复',
      success(res) {
        if (res.confirm) {
          //console.log('确定删除');
          wx.request({
            url: app.globalData.host + '/address/delete',
            data: {
              addressID: _this.data.addressID
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              wx.navigateBack({
                delta:1,
              });
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 2000
              });
            },
            fail: function (res) {
              console.log(res);
            }
          })
        } else if (res.cancel) {
          //console.log('取消删除')
        }
      }
    });
  },

  // 从微信获取地址
  getFromWX: function(){
    var _this = this;
    wx.chooseAddress({
      success(res) {
        var region = new Array(res.provinceName,res.cityName,res.countyName)
        _this.setData({
          receiver: res.userName,
          telephone: res.telNumber,
          region: region,
          detail: res.detailInfo
        })
      // console.log(res.userName)//收货人姓名
      // console.log(res.postalCode)//邮编
      // console.log(res.provinceName)//国标收货地址第一级地址
      // console.log(res.cityName)//国标收货地址第二级地址
      // console.log(res.countyName)//国标收货地址第三级地址
      // console.log(res.detailInfo)//详细收货地址信息
      // console.log(res.nationalCode)//收货地址国家码
      // console.log(res.telNumber)//收货人手机号码
      }
    })
  }
})