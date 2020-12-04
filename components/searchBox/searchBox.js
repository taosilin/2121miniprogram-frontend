// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyItem:{
      type:Array,
      value:['土星','碳纤维','太阳眼镜']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchInput: '',
    flag: true
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
    },

    //隐藏
    hideBox: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示
    showBox () {
      this.setData({
        flag: !this.data.flag
      })
    }

  }
})
