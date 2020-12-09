// components/servicePopup/servicePopup.js
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
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        flag: true
      })
    }
  }
})
