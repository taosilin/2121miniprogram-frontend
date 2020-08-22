// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[
        {
          "iconPath": "../../image/icon/index_normal.png",
          "selectedIconPath": "../../image/icon/index_selected.png",
          "pagePath":"../../pages/index/index",
          "text": "首页"
        },
        {
          "iconPath": "../../image/icon/mall_normal.png",
          "selectedIconPath": "../../image/icon/mall_selected.png",
          "pagePath":"../../pages/shoppingMall/shoppingMall",
          "text": "商城"
        },
        {
          "iconPath": "../../image/icon/optometry_normal.png",
          "selectedIconPath": "../../image/icon/optometry_selected.png",
          "pagePath":"../../pages/optpmetry/optpmetry",
          "text": "验光狮"
        },
        {
          "iconPath": "../../image/icon/cart_normal.png",
          "selectedIconPath": "../../image/icon/cart_selected.png",
          "pagePath":"../../pages/shoppingCart/shoppingCart",
          "text": "购物车"
        },
        {
          "iconPath": "../../image/icon/me_normal.png",
          "selectedIconPath": "../../image/icon/me_selected.png",
          "pagePath":"../../pages/userCenter/userCenter",
          "text": "我的"
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //tabbar切换
    swichNav: function (e) {
      //console.log(e);
      let that = this;
      if (this.data.currentTab === e.currentTarget.dataset.id) {
        return false;
      } else {
        that.setData({
          currentTab: e.currentTarget.dataset.id
        })
      }
    }
  }
})
