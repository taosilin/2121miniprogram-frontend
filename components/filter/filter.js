// components/filter/filter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width:{
      type:String,
      value:'150'
    },
    height:{
      type:String,
      value:'60'
    },
    titleSize:{
      type:String,
      value:'28'
    },
    filterList:{
      type:Array,
      value:[
        {
          filterName:"折射率",
          options:[1.56,1.60,1.67,1.74],
          selectItem:0
        },
        {
          filterName:"镜片功能",
          options:["高清绿膜镜片","感光变色镜片","双效抗疲劳镜片","科技膜层变色镜片"],
          selectItem:0
        },
        {
          filterName:"镜片材质",
          options:["PC","树脂"],
          selectItem:0
        },
        {
          filterName:"适用对象",
          options:["中年","老年","少年","青年"],
          selectItem:0
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    filterOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openFilter:function(){
      this.setData({
        filterOpen:!this.data.filterOpen
      })
    },
    filterChange:function(e){
      let i = e.currentTarget.dataset.i;
      let j = e.target.dataset.j;
      //console.log(i,j);
      if (j!=undefined){
        let items = this.data.filterList;
        items[i].selectItem = j;
        this.setData({
          filterList:items
        })
      }
    }
  }
})

