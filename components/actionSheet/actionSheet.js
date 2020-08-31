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
    },
    optionItem:{
      type:Number,
      value:0
    },
    addCart:{
      type:String,
      value:"0"
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
    //隐藏菜单
    hideSheet: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示菜单
    showSheet () {
      this.setData({
        flag: !this.data.flag
      })
    },

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
    },
    onItemChange:function(e){
      let id = e.currentTarget.dataset.id;
      this.setData({
        optionItem:id
      })
    },
    onAddCart:function(){
      this.setData({
        flag: !this.data.flag
      });
      wx.showToast({
        title: '添加成功',
      })
    },
    onComplete:function(){
      wx.navigateTo({
        url: '../../pages/confirmOrder/confirmOrder',
      })
    }
  }
})
