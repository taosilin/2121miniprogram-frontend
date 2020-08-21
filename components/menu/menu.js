// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuName:{
      type:String,
      value:'菜单'
    },
    menuItem:{
      type:Array,
      value:['item1','item2','item3']
    },
    width:{
      type:String,
      value:'100'
    },
    height:{
      type:String,
      value:'30'
    },
    titleSize:{
      type:String,
      value:'14'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuOpen:false,
    selectId:0,
    selectName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openMenu:function(){
      this.setData({
        menuOpen:!this.data.menuOpen
      })
    },
    selectItem:function(e){
      var selectId=e.target.dataset.id;
      var selectName=e.target.dataset.model;
      console.log(selectId,selectName)
      this.setData({
        selectId:selectId,
        selectName:selectName
      })
    }
  }
})
