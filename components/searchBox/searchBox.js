// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyItem:{
      type:Array,
      value:['隐形眼镜','圆框眼镜','眼镜布','太阳眼镜']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchInput:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onInputChange:function(e){
      this.setData({
        searchInput:e.detail.value
      });
    },

    onSearchHistory:function(e){
      let id = e.currentTarget.dataset.id;
      this.setData({
        searchInput:this.properties.historyItem[id]
      });
      wx.navigateTo({
        url: '../searchResult/searchResult?searchInput='+this.data.searchInput,
      })
    },

    onCancel:function(){
      this.setData({
        searchInput:''
      })
    },

    onSearch:function(e){
      if (this.data.searchInput!=''){
        wx.navigateTo({
          url: '../searchResult/searchResult?searchInput='+this.data.searchInput,
        })
      }
    },

    onClearHistory:function(e){
      this.setData({
        historyItem:[]
      })
    }
  }
})
