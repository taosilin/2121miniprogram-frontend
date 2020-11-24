// components/grantDialog/grantDialog.js
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
    // 获取用户微信信息
    bindgetuserinfo: function(e){
      app.globalData.userInfo = e.detail.userInfo;
      this.triggerEvent("getuserinfo",e.detail.userInfo);
      this.setData({
        flag: true
      });
    }
  }
})