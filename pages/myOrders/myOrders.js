// pages/myOrders/myOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // orders:[
    //   {
    //     orderdate:"2020-08-01",
    //     orderid:"12345567788898",
    //     state:"待付款",
    //     sum:550,
    //     commodityList:[
    //       {
    //         name:"银色细边眼镜",
    //         cmdid:"xxxxxx1",
    //         color:"银色",
    //         price:275,
    //         num:1,
    //         leftdegree:-3.25,
    //         rightdegree:-3.75,
    //         picture:"../../image/glasses.jpg"
    //       },
    //       {
    //         name:"银色细边眼镜",
    //         cmdid:"xxxxxx2",
    //         color:"银色",
    //         price:275,
    //         num:1,
    //         leftdegree:-3.25,
    //         rightdegree:-3.75,
    //         picture:"../../image/glasses.jpg"
    //       }
    //     ]
    //   },
    //   {
    //     orderdate:"2020-08-01",
    //     orderid:"12345567788898",     
    //     state:"待付款",
    //     sum:299,
    //     commodityList:[
    //       {
    //         name:"黑色粗边眼镜",
    //         cmdid:"1234567890",
    //         color:"黑色",
    //         price:299,
    //         num:1,
    //         leftdegree:-5.50,
    //         rightdegree:-5.50,
    //         picture:"../../image/glasses.jpg",
    //       }
    //     ]
    //   },
    //   {
    //     orderdate:"2020-08-01",
    //     orderid:"12345567788898",
    //     sum:299,
    //     state:"待付款",
    //     commodityList:[
    //       {
    //         name:"黑色粗边眼镜",
    //         cmdid:"1234567890",
    //         color:"黑色",
    //         price:299,
    //         num:1,
    //         leftdegree:-5.50,
    //         rightdegree:-5.50,
    //         picture:"../../image/glasses.jpg",
    //       }
    //     ]
    //   },
    //   {
    //     orderdate:"2020-08-17",
    //     orderid:"12345567788898",
    //     sum:299,
    //     state:"待收货",
    //     commodityList:[
    //       {
    //         name:"黑色粗边眼镜",
    //         cmdid:"1234567890",
    //         color:"黑色",
    //         price:299,
    //         num:1,
    //         leftdegree:-5.50,
    //         rightdegree:-5.50,
    //         picture:"../../image/glasses.jpg",
    //       }
    //     ]
    //   },
    //   {
    //     orderdate:"2020-08-17",
    //     orderid:"123456789098",
    //     sum:299,
    //     state:"待评价",
    //     commodityList:[
    //       {
    //         name:"黑色粗边眼镜",
    //         cmdid:"1234567890",
    //         color:"黑色",
    //         price:299,
    //         num:1,
    //         leftdegree:-5.50,
    //         rightdegree:-5.50,
    //         picture:"../../image/glasses.jpg",
    //       }
    //     ]
    //   },
    //   {
    //     orderdate:"2020-08-17",
    //     orderid:"12345567788898",
    //     sum:599,
    //     state:"已完成",
    //     commodityList:[
    //       {
    //         name:"黑色粗边眼镜",
    //         cmdid:"1234567890",
    //         color:"黑色",
    //         price:599,
    //         num:1,
    //         leftdegree:-5.50,
    //         rightdegree:-5.50,
    //         picture:"../../image/glasses.jpg",
    //       }
    //     ]
    //   }
    // ],
    orders:[],
    recommend:[
      {
        name:"银色细边眼镜",
        price:275,
        imgUrl:'../../image/glasses.jpg'
      },
      {
        name:"银色细边眼镜",
        price:599,
        imgUrl:'../../image/glasses.jpg'
      },
      {
        name:"银色细边眼镜",
        price:299,
        imgUrl:'../../image/glasses.jpg'
      },
      {
        name:"银色细边眼镜",
        price:275,
        imgUrl:'../../image/glasses.jpg'
      },
      {
        name:"银色细边眼镜",
        price:275,
        imgUrl:'../../image/glasses.jpg'
      },
      {
        name:"银色细边眼镜",
        price:275,
        imgUrl:'../../image/glasses.jpg'
      }
    ],
    windowHeight:700,
    itemWidth:167,
    pdr:24,
    tabs:['全部订单', '待付款', '待收货', '待评价', '售后']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      windowHeight:sysInfo.windowHeight-32,
      itemWidth:(sysInfo.windowWidth-80)/2,
      pdr:(sysInfo.windowWidth-80)*0.1437/2
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})