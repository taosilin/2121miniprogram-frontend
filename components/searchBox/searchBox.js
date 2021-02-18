// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyItem:{
      type:Array,
      value:['[Si] 查令','[N] 墨新','[Ag] 栀风']
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

    // 搜索
    onSearch:function(e){
      if (this.data.searchInput!=''){
        wx.navigateTo({
          url: '../searchResult/searchResult?searchInput='+this.data.searchInput,
        })
        wx.setStorage({
          key:"historyItem",
          data: new Array(this.data.searchInput).concat(this.properties.historyItem)
        })
      }
    },

    // 清除历史记录
    onClearHistory:function(e){
      this.setData({
        historyItem:[]
      })
      wx.setStorage({
        key:"historyItem",
        data:[]
      })
    },

    //隐藏
    hideBox: function () {
      this.setData({
        flag: true,
        searchInput: ''
      })
    },
    //展示
    showBox: function () {
      this.setData({
        flag: false
      })
    },
    move: function(){}

  }
})
