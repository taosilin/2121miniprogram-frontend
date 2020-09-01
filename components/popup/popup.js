// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    customInfo:{
      type:Object,
      value:{
        glassesType:'近视',
        leftEyeDegree:'-2.75',
        rightEyeDegree:'-4.50',
        interpupillaryDistance:'72',
        leftEyeAstigmatism:'-0.25',
        rightEyeAstigmatism:'-0.50',
        leftEyeAxis:'0',
        rightEyeAxis:'0'
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示弹框
    showPopup () {
      this.setData({
        flag: !this.data.flag
      })
    }
  }
})
