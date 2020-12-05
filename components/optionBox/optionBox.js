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
      value:["-12.00","-11.75","-11.50","-11.25","-11.00","-10.75","-10.50","-10.25","-10.00","-9.75","-9.50","-9.25","-9.00","-8.75","-8.50","-8.25","-8.00","-7.75","-7.50","-7.25","-7.00","-6.75","-6.50","-6.25","-6.00","-5.75","-5.50","-5.25","-5.00","-4.75","-4.50","-4.25","-4.00","-3.75","-3.50","-3.25","-3.00","-2.75","-2.50","-2.25","-2.00","-1.75","-1.50","-1.25","-1.00","-0.75","-0.50","-0.25","0.00","+0.25","+0.50","+0.75","+1.00","+1.25","+1.50","+1.75","+2.00","+2.25","+2.50","+2.75","+3.00","+3.25","+3.50","+3.75","+4.00","+4.25","+4.50","+4.75","+5.00","+5.25","+5.50","+5.75","+6.00"]
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
    },
    optionValue:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //optionValue:'',
    isOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openOption:function(){
      this.setData({
        isOpen:!this.data.isOpen
      })
    },
    
    onSelect:function(e){
      let id = e.currentTarget.dataset.id
      this.setData({
        optionValue: this.properties.options[id]
      })
      this.triggerEvent("optionChange",this.properties.optionValue)
    }
  }
})
