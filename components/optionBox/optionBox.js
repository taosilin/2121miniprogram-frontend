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
      value:[-1200,-1175,-1150,-1125,-1100,-1075,-1050,-1025,-1000,-975,-950,-925,-900,-875,-850,-825,-800,-775,-750,-725,-700,-675,-650,-625,-600,-575,-550,-525,-500,-475,-450,-425,-400,-375,-350,-325,-300,-275,-250,-225,-200,-175,-150,-125,-100,-75,-50,-25,0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600]
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
      this.setData({
        isOpen:!this.data.isOpen
      })
    },
    
    onSelect:function(e){
      let id = e.currentTarget.dataset.id
      this.setData({
        optionValue: this.properties.options[id]
      })
      this.triggerEvent("optionChange",this.data.optionValue)
    }
  }
})
