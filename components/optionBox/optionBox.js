// components/optionBox/optionBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boxWidth:{
      type:String,
      value:'292'
    },
    boxHeight:{
      type:String,
      value:'68'
    },
    options:{
      type:Array,
      value:["远视600度(+6.00)","远视575度(+5.75)","远视550度(+5.50)","远视525度(+5.25)","远视500度(+5.00)","远视475度(+4.75)","远视450度(+4.50)","远视425度(+4.25)","远视400度(+4.00)","远视375度(+3.75)","远视350度(+3.50)","远视325度(+3.25)","远视300度(+3.00)","远视275度(+2.75)","远视250度(+2.50)","远视225度(+2.25)","远视200度(+2.00)","远视175度(+1.75)","远视150度(+1.50)","远视125度(+1.25)","远视100度(+1.00)","远视75度(+0.75)","远视50度(+0.50)","远视25度(+0.25)","平光(0.00)","近视25度(-0.25)","近视50度(-0.50)","近视75度(-0.75)","近视100度(-1.00)","近视125度(-1.25)","近视150度(-1.50)","近视175度(-1.75)","近视200度(-2.00)","近视225度(-2.25)","近视250度(-2.50)","近视275度(-2.75)","近视300度(-3.00)","近视325度(-3.25)","近视350度(-3.50)","近视375度(-3.75)","近视400度(-4.00)","近视425度(-4.25)","近视450度(-4.50)","近视475度(-4.75)","近视500度(-5.00)","近视525度(-5.25)","近视550度(-5.50)","近视575度(-5.75)","近视600度(-6.00)","近视625度(-6.25)","近视650度(-6.50)","近视675度(-6.75)","近视700度(-7.00)","近视725度(-7.25)","近视750度(-7.50)","近视775度(-7.75)","近视800度(-8.00)","近视825度(-8.25)","近视850度(-8.50)","近视875度(-8.75)","近视900度(-9.00)","近视925度(-9.25)","近视950度(-9.50)","近视975度(-9.75)","近视1000度(-10.00)","近视1025度(-10.25)","近视1050度(-10.50)","近视1075度(-10.75)","近视1100度(-11.00)","近视1125度(-11.25)","近视1150度(-11.50)","近视1175度(-11.75)","近视1200度(-12.00)"]
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
      value: "0.00"
    },
    defaultValue:{
      type: Array,
      value: [24]
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
    closeOption:function(){
      this.setData({
        isOpen:false
      })
    },
    onSelect:function(e){
      let id = e.currentTarget.dataset.id
      this.setData({
        optionValue: this.properties.options[id]
      })
      this.triggerEvent("optionChange",this.properties.optionValue)
    },
    onChangeValue:function(e){
      const val = e.detail.value
      // console.log(e,val)
      this.setData({
        optionValue: this.properties.options[val[0]]
      })
      this.triggerEvent("optionChange",this.properties.optionValue)
    }
  }
})
