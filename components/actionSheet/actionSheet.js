// components/actionSheet/actionSheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    price:{
      type:Number,
      value:299
    },
    originalPrice:{
      type:Number,
      value:899
    },
    selectTab:{
      type:Number,
      value:0
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
    onBtn1:function(){
      this.setData({
        selectTab:0
      })
    },
    onBtn2:function(){
      this.setData({
        selectTab:1
      })
    },
    onBtn3:function(){
      this.setData({
        selectTab:2
      })
    }
  }
})
