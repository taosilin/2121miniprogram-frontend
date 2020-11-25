// components/loginDialog/loginDialog.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    flag:{
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取用户手机号
    bindgetphonenumber: function(e){
      var _this = this;
      if (e.detail.errMsg == "getPhoneNumber:fail user deny") return;
      wx.request({
        url: app.globalData.host+'/app/decodeUserInfo',
        data: {
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
          sessionKey: app.globalData.session_key
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          console.log(res.data.data)
          app.globalData.phoneNumber = res.data.data

          wx.request({
            url: app.globalData.host+'/user/add',
            data: {
              userID: app.globalData.phoneNumber,
              nickname: app.globalData.userInfo.nickName,
              gender: app.globalData.userInfo.gender,
              avatarUrl: app.globalData.userInfo.avatarUrl
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              if (res.data.data == "该用户已存在！"){
                wx.request({
                  url: app.globalData.host+'/user/detail',
                  data:{
                    userID: app.globalData.phoneNumber
                  },
                  method: 'POST',
                  header: {
                    'content-type': 'application/json'//默认值
                  },
                  success: function (res) {
                    _this.triggerEvent("userExist",res.data.data)
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
          });

        },
        fail: function (res) {
          console.log("请求失败");
        }
      })
      this.setData({
        flag: true
      })
    },
    // 取消获取
    onCancel:function(e){
      this.setData({
        flag: true
      });
    }
  }
})
