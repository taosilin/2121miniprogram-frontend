// components/optionBox/optionBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boxWidth:{
      type:String,
      value:'297'
    },
    boxHeight:{
      type:String,
      value:'68'
    },
    options:{
      type:Array,
      value:['200','250','300','350','400']
    },
    placeholderText:{
      type:String,
      value:'左眼度数'
    },
    fontSize:{
      type:String,
      value:'26'
    },
    fontColor:{
      type:String,
      value:'#747474'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    optionValue:'',
    isOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openOption:function(){
      wx.showActionSheet({
        itemList: ['200','250','300','350','400'],
        success (res) {
          console.log(res.tapIndex)
        },
        fail (res) {
          console.log(res.errMsg)
        }
      })
      
      // this.setData({
      //   isOpen:!this.data.isOpen
      // })
    }
  }
})
