// components/actionSheet/actionSheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    colors:{
      type: Array,
      value: {}
    },
    selectedColor:{
      type:Number,
      value: 0
    },
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
    },
    interpupillarys:{
      type: Array,
      value: [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
    },
    astigmatisms:{
      type: Array,
      value: [0,-25,-50,-75,-100,-125,-150,-175,-200]
    },
    axiss:{
      type: Array,
      value: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true,
    leftDegree: 0,
    rightDegree: 0,
    interpupillary: 0,
    leftAstigmatism: 0,
    rightAstigmatism: 0,
    leftAxis: 0,
    rightAxis: 0
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
      this.setData({
        flag: !this.data.flag
      });
      wx.navigateTo({
        url: '../../pages/confirmOrder/confirmOrder',
      })
    },
    onColorChange:function(e){
      this.setData({
        selectedColor: e.currentTarget.dataset.id
      })
    },
    onLeftDegreeChange:function(e){
      this.setData({
        leftDegree: e.detail
      })
    },
    onRightDegreeChange:function(e){
      this.setData({
        rightDegree: e.detail
      })
    },
    onInterpupillaryChange:function(e){
      this.setData({
        interpupillary: e.detail
      })
    },

    onLeftAstigmatismChange:function(e){
      this.setData({
        leftAstigmatism: e.detail
      })
    },
    onRightAstigmatismChange:function(e){
      this.setData({
        rightAstigmatism: e.detail
      })
    },
    onLeftAxisChange:function(e){
      this.setData({
        leftAxis: e.detail
      })
    },
    onRightAxisChange:function(e){
      this.setData({
        rightAxis: e.detail
      })
    },



    onConfirm:function(e){
      console.log(e);
      console.log(this.data)
    }
  }
})
