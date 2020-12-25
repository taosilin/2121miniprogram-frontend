// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuName:{
      type:String,
      value:'排序'
    },
    menuItem:{
      type:Array,
      value:['最佳匹配','最新上架','价格低至高','价格高至低']
    },
    width:{
      type:String,
      value:'260'
    },
    height:{
      type:String,
      value:'60'
    },
    titleSize:{
      type:String,
      value:'28'
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
      this.setData({
        selectId:selectId,
        selectName:selectName
      })
    }
  }
})
