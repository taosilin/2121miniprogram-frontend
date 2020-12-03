// pages/shoppingCart/shoppingCart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[],
    checkbox: [], // 多选框
    checkboxBool: [],
    selectAll: false,  // 全选
    total: 0,  // 合计总价
    customInfo: {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    },
    txtStyle:[],
    delBtnWidth: 150//删除按钮宽度单位（rpx）
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sysInfo = wx.getSystemInfoSync();
    var _this = this;

    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data.data)
        _this.setData({
          productList: res.data.data
        });
        var checkboxBool = new Array();
        for (let i=0;i<res.data.data.length;i++){
          checkboxBool.push(false);
        }
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.request({
      url: app.globalData.host + '/cart/user',
      data:{
        userID: app.globalData.phoneNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        _this.setData({
          productList: res.data.data
        })
      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
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

  },
  // 去逛逛
  onShop:function(e){
    wx.switchTab({
      url: '../shoppingMall/shoppingMall'
    });
  },
  // 多选框选项变化
  checkboxChange: function(e) {
    console.log(e.detail.value);
    let checkboxBool = this.data.checkboxBool;

    if (e.detail.value.length==this.data.productList.length){
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = true;
      }
      this.setData({
        selectAll: true
      });
    }
    else if (e.detail.value.length==0){
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = false;
      }
      this.setData({
        selectAll: false
      });
    }
    else{
      for (let i=0;i<this.data.productList.length;i++){
        if (e.detail.value.indexOf(i.toString())!=-1){
          checkboxBool[i] = true;
        }
        else{
          checkboxBool[i] = false;
        }    
      }
      this.setData({
        selectAll: false
      });
    }
    this.setData({
      checkbox: e.detail.value,
      checkboxBool: checkboxBool
    });

    this.computeTotal();
  },

  // 全选or取消全选
  selectAll:function(){
    var checkbox = new Array();
    var checkboxBool = this.data.checkboxBool;
    if (this.data.checkbox.length<this.data.productList.length){
      // 全选
      for (let i=0;i<this.data.productList.length;i++){
        checkbox.push(i.toString());
        checkboxBool[i] = true;
      }    
    }
    else{
      // 取消全选
      for (let i=0;i<this.data.productList.length;i++){
        checkboxBool[i] = false;
      } 
    }

    this.setData({
      checkbox: checkbox,
      checkboxBool: checkboxBool
    });

    this.computeTotal();
  },

  // 打开定制信息弹窗
  openPopup:function(e){
    let index = e.currentTarget.dataset.id;
    let customInfo = {
      glassesType:'近视',
      leftEyeDegree:0.00,
      rightEyeDegree:0.00,
      interpupillaryDistance:0,
      leftEyeAstigmatism:null,
      rightEyeAstigmatism:null,
      leftEyeAxis:null,
      rightEyeAxis:null
    };
    customInfo.leftEyeDegree = this.data.productList[index].cart.leftDegree;
    customInfo.rightEyeDegree = this.data.productList[index].cart.rightDegree;
    customInfo.interpupillaryDistance = this.data.productList[index].cart.interpupillary;
    customInfo.leftEyeAstigmatism = this.data.productList[index].cart.leftAstigmatism;
    customInfo.rightEyeAstigmatism = this.data.productList[index].cart.rightAstigmatism;
    customInfo.leftEyeAxis = this.data.productList[index].cart.leftAxis;
    customInfo.rightEyeAxis = this.data.productList[index].cart.rightAxis;
    this.setData({
      customInfo: customInfo
    })
    this.popup.showPopup();
  },

  // 商品数量变化
  onNumChange:function(e){
    let id = e.currentTarget.dataset.id;

    var tmp = this.data.productList;
    tmp[id].cart.num = e.detail;
    this.setData({
      productList: tmp
    });
    wx.request({
      url: app.globalData.host+'/cart/update',
      data:{
        userID: app.globalData.phoneNumber,
        productID: this.data.productList[id].spec.productID,
        specID: this.data.productList[id].spec.specID,
        num: e.detail,
        lensID: this.data.productList[id].lens.lensID,
        leftDegree: this.data.productList[id].cart.leftDegree,
        rightDegree: this.data.productList[id].cart.rightDegree,
        interpupillary: this.data.productList[id].cart.interpupillary,
        leftAstigmatism: this.data.productList[id].cart.leftAstigmatism,
        rightAstigmatism: this.data.productList[id].cart.rightAstigmatism,
        leftAxis:  this.data.productList[id].cart.leftAxis,
        rightAxis: this.data.productList[id].cart.rightAxis
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {

      },
      fail: function (res) {
        console.log("请求失败");
      }
    })
    this.computeTotal();
  },

  // 计算合计总价
  computeTotal:function(){
    let total = 0;
    for (let i=0;i<this.data.checkbox.length;i++){
      let index = Number(this.data.checkbox[i]);
      total = total + this.data.productList[index].spec.price*this.data.productList[index].cart.num;
    }
    this.setData({
      total: total
    })
  },

  // 结算
  onSettlement:function(){
    let buySpec = [];
    for (let i=0;i<this.data.checkbox.length;i++){
      let index = Number(this.data.checkbox[i]);
      buySpec.push(this.data.productList[index]);
    }
    buySpec = JSON.stringify(buySpec);
    wx.navigateTo({
      url: '../../pages/confirmOrder/confirmOrder?buySpec='+buySpec,
    })
  },


  touchS: function (e) {
    //判断是否只有一个触摸点
     if (e.touches.length == 1) {
       this.setData({
         //设置触摸起始点水平方向位置
         startX: e.touches[0].clientX
       });
     }
   },
 
   touchM: function (e) {
     if (e.touches.length == 1) {
       //手指移动时水平方向位置
       var moveX = e.touches[0].clientX;
       //手指起始点位置与移动期间的差值
       var disX = this.data.startX - moveX;
       var delBtnWidth = this.data.delBtnWidth;
       var txtStyle = "";
       if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
         txtStyle = "left:0px";
       } else if(disX > 0){//移动距离大于0，文本层left值等于手指移动距离
         txtStyle = "left:-" + disX + "px";
         if (disX >= delBtnWidth) {
           //控制手指移动距离最大值为删除按钮的宽度
           txtStyle = "left:-" + delBtnWidth + "px";
         }
       }
       //获取手指触摸的是哪一项
       var index = e.currentTarget.dataset.index;
       var list = this.data.productList;
       var style = this.data.txtStyle;
       style[index]=txtStyle;
       this.setData({
         txtStyle:style
       });
     }
   },
 
   touchE: function (e) {
     if (e.changedTouches.length == 1) {
       //手指移动结束后水平位置
       var endX = e.changedTouches[0].clientX;
       //触摸开始与结束，手指移动的距离
       var disX = this.data.startX - endX;
       var delBtnWidth = this.data.delBtnWidth;
       //如果距离小于删除按钮的1/2，不显示删除按钮
       var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
       //获取手指触摸的是哪一项
       var index = e.currentTarget.dataset.index;
       var list = this.data.productList;
       var style = this.data.txtStyle;
       style[index] = txtStyle;
       this.setData({
         txtStyle: style
       });
     }
   },
   //获取元素自适应后的实际宽度
   getEleWidth: function (w) {
     var real = 0;
     try {
       var res = wx.getSystemInfoSync().windowWidth;
       var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
       // console.log(scale);
       real = Math.floor(res / scale);
       return real;
     } catch (e) {
       return false;
       // Do something when catch error
     }
   },
   initEleWidth: function () {
     var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
     this.setData({
       delBtnWidth: delBtnWidth
     });
   },

   //删除购物车
   onDelete: function (e) {
     console.log(e)
     var id = e.currentTarget.dataset.index;
     var _this = this;
     wx.showModal({
       title: '警告',
       content: '确定从购物车中删除？此操作不可恢复',
       success(res) {
         if (res.confirm) {
           console.log('确定删除');
           wx.request({
             url: app.globalData.host+'/cart/delete',
             data:{
              userID: app.globalData.phoneNumber,
              productID: _this.data.productList[id].spec.productID,
              specID: _this.data.productList[id].spec.specID,
              lensID: _this.data.productList[id].lens.lensID,
              leftDegree: _this.data.productList[id].cart.leftDegree,
              rightDegree: _this.data.productList[id].cart.rightDegree,
              interpupillary: _this.data.productList[id].cart.interpupillary,
              leftAstigmatism: _this.data.productList[id].cart.leftAstigmatism,
              rightAstigmatism: _this.data.productList[id].cart.rightAstigmatism,
              leftAxis: _this.data.productList[id].cart.leftAxis,
              rightAxis:_this.data.productList[id].cart.rightAxis
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              let newList = _this.data.productList;
              newList.splice(id,1);
              _this.setData({
                productList: newList,
                txtStyle:[]
              })
              wx.showToast({ title: '删除成功', icon: 'none' });
            },
            fail: function (res) {
              console.log("请求失败");
            }
           })
         } else if (res.cancel) {
           console.log('取消删除')
         }
       }
     }); 
   }
  
})