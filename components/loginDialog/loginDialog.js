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
        },
        fail: function (res) {
          console.log("请求失败");
        }
      })
      this.setData({
        flag: true
      })
    }
  }
})
