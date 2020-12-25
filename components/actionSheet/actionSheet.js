// components/actionSheet/actionSheet.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    frame:{
      type:Object,
      value:{}
    },
    colors:{
      type: Array,
      value: []
    },
    selectedColor:{
      type:Number,
      value: 0
    },
    price:{
      type:Number,
      value:299
    },
    originalPrice:{
      type:Number,
      value:899
    },
    selectTab:{
      type:Number,
      value:0
    },
    optionType:{
      type:Number,
      value:0
    },
    optionSpec:{
      type:Number,
      value:0
    },
    addCart:{
      type:String,
      value:"0"
    },
    interpupillarys:{
      type: Array,
      value: [49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
    },
    astigmatisms:{
      type: Array,
      value: ["-0.25","-0.50","-0.75","-1.00","-1.25","-1.50","-1.75","-2.00"]
    },
    axiss:{
      type: Array,
      value: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true,
    leftDegree: null,
    rightDegree: null,
    interpupillary: null,
    leftAstigmatism: null,
    rightAstigmatism: null,
    leftAxis: null,
    rightAxis: null,
    enabledLens:[] 
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 隐藏菜单
    hideSheet: function () {
      this.setData({
        flag: !this.data.flag
      })
    },

    // 展示菜单
    showSheet () {
      this.setData({
        flag: !this.data.flag
      })
    },

    onBtn1:function(){
      this.setData({
        selectTab:0
      })
    },

    onBtn2:function(){
      this.setData({
        selectTab:1
      })
    },
 
    onBtn3:function(){
      //检查第二步是否填写完整
      var _this = this;
      if (this.data.leftDegree==null||this.data.rightDegree==null){
        // 未选择度数
        wx.showToast({
          title: '请选择度数',
          icon: 'none',
          duration: 2000
        });
      }
      else if(this.data.leftDegree==0.00&&this.data.rightDegree==0.00){
        // 购买平光
        wx.showToast({
          title: '您选择的度数为0，如需购买平光镜，请直接选择【购买平光】',
          icon: 'none',
          duration: 2000
        });
      }
      else if ((this.data.leftDegree!=null||this.data.rightDegree!=null)&&(this.data.interpupillary==null)){
        // 未选择瞳距
        wx.showToast({
          title: '请选择瞳距',
          icon: 'none',
          duration: 2000
        });
      }
      else if ((this.data.leftAstigmatism!=null&&this.data.leftAxis==null)||(this.data.rightAstigmatism!=null&&this.data.rightAxis==null)){
        // 散光未选择轴位
        wx.showToast({
          title: '请选择轴位',
          icon: 'none',
          duration: 2000
        });
      }
      else{
        // 条件全部满足，跳转到下一步
        if (this.data.leftAstigmatism==null){
          this.setData({
            leftAstigmatism: 0.00,
            leftAxis: 0
          })
        }
        if (this.data.rightAstigmatism==null){
          this.setData({
            rightAstigmatism: 0.00,
            rightAxis: 0
          })
        }

        wx.request({
          url: app.globalData.host+'/framelens/enabledLens',
          data:{
            frameID: this.data.colors[this.data.selectedColor].productID,
            leftDegree: this.data.leftDegree,
            rightDegree: this.data.rightDegree,
            leftAstigmatism: this.data.leftAstigmatism,
            rightAstigmatism: this.data.rightAstigmatism
          },
          method: 'POST',
          header: {
            'content-type': 'application/json'//默认值
          },
          success: function (res) {
            
            //console.log(res.data.data);
            // 判断是否有可选镜片
            if (res.data.data.length>0){
              _this.setData({
                selectTab:2,
                enabledLens:res.data.data
              });
            }
            else{
              wx.showToast({
                title: '根据您选择的度数，无对应的镜片',
                icon: 'none',
                duration: 2000
              });
            }
            
          },
          fail: function (res) {
            console.log(res);
          }
        })
      }
      
    },

    // 选择镜片类型
    onTypeChange:function(e){
      let id = e.currentTarget.dataset.id;
      this.setData({
        optionType:id,
        optionSpec: 0
      })
    },

    // 选择镜片规格
    onSpecChange:function(e){
      let id = e.currentTarget.dataset.id;
      this.setData({
        optionSpec:id
      })
    },
    // 添加到购物车
    onAddCart:function(){
      this.setData({
        flag: !this.data.flag
      });

      if (this.data.leftDegree==null){
        this.setData({
          leftDegree: 0.00
        })
      }
      if (this.data.rightDegree==null){
        this.setData({
          rightDegree: 0.00
        })
      }
      if (this.data.interpupillary==null){
        this.setData({
          interpupillary: 0
        })
      }
      if (this.data.leftAstigmatism==null){
        this.setData({
          leftAstigmatism: 0.00,
          leftAxis: 0
        })
      }
      if (this.data.rightAstigmatism==null){
        this.setData({
          rightAstigmatism: 0.00,
          rightAxis: 0
        })
      }
      
      wx.request({
        url: app.globalData.host+'/cart/add',
        data:{
          userID: app.globalData.openid,
          productID: this.data.colors[this.data.selectedColor].productID,
          specID: this.data.colors[this.data.selectedColor].specID,
          num: 1,
          lensID: this.properties.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].lensID,
          leftDegree: this.data.leftDegree,
          rightDegree: this.data.rightDegree,
          interpupillary: this.data.interpupillary,
          leftAstigmatism: this.data.leftAstigmatism,
          rightAstigmatism: this.data.rightAstigmatism,
          leftAxis: this.data.leftAxis,
          rightAxis: this.data.rightAxis
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    },

    // 立即购买
    onComplete:function(){
      this.setData({
        flag: !this.data.flag
      });

      if (this.data.leftDegree==null){
        this.setData({
          leftDegree: 0.00
        })
      }
      if (this.data.rightDegree==null){
        this.setData({
          rightDegree: 0.00
        })
      }
      if (this.data.interpupillary==null){
        this.setData({
          interpupillary: 0
        })
      }
      if (this.data.leftAstigmatism==null){
        this.setData({
          leftAstigmatism: 0.00,
          leftAxis: 0
        })
      }
      if (this.data.rightAstigmatism==null){
        this.setData({
          rightAstigmatism: 0.00,
          rightAxis: 0
        })
      }

      let buySpec = JSON.stringify([{
        cart:{
          lensID: this.properties.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].lensID,
          num: 1,
          leftDegree: this.data.leftDegree,
          rightDegree: this.data.rightDegree,
          interpupillary: this.data.interpupillary,
          leftAstigmatism: this.data.leftAstigmatism,
          rightAstigmatism: this.data.rightAstigmatism,
          leftAxis: this.data.leftAxis,
          rightAxis: this.data.rightAxis
        },
        frame:this.data.frame,
        spec:{
          specID: this.data.colors[this.data.selectedColor].specID,
          productID: this.data.colors[this.data.selectedColor].productID,
          price: this.data.colors[this.data.selectedColor].price,
          specImage: this.data.colors[this.data.selectedColor].specImage,
        },
        lens:{
          lensID: this.data.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].lensID,
          lensName: this.data.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].lensName,
          refractiveIndex: this.data.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].refractiveIndex,
          price: this.data.enabledLens[this.properties.optionType].specs[this.properties.optionSpec].price
        },
        color:{
          colorID: this.data.colors[this.data.selectedColor].colorID,
          colorName: this.data.colors[this.data.selectedColor].colorName
        }
      }]);
      wx.navigateTo({
        url: '../../pages/confirmOrder/confirmOrder?buySpec='+buySpec,
      })
    },


    onColorChange:function(e){
      this.setData({
        selectedColor: e.currentTarget.dataset.id
      })
    },
    onLeftDegreeChange:function(e){
      this.setData({
        leftDegree: e.detail
      })
    },
    onRightDegreeChange:function(e){
      this.setData({
        rightDegree: e.detail
      })
    },
    onInterpupillaryChange:function(e){
      this.setData({
        interpupillary: e.detail
      })
    },

    onLeftAstigmatismChange:function(e){
      this.setData({
        leftAstigmatism: e.detail
      })
    },
    onRightAstigmatismChange:function(e){
      this.setData({
        rightAstigmatism: e.detail
      })
    },
    onLeftAxisChange:function(e){
      this.setData({
        leftAxis: e.detail
      })
    },
    onRightAxisChange:function(e){
      this.setData({
        rightAxis: e.detail
      })
    },

    // 验光单怎么看
    optometrySheet:function(){
      wx.navigateTo({
        url: '../optometrySheet/optometrySheet',
      })
    },

    // 购买平光
    buyPlain:function(){
      var _this = this;
      this.setData({
        leftDegree: 0.00,
        rightDegree: 0.00,
        interpupillary: 0,
        leftAstigmatism: 0.00,
        rightAstigmatism: 0.00,
        leftAxis: 0,
        rightAxis: 0,
        selectTab:2
      });

      wx.request({
        url: app.globalData.host+'/framelens/enabledLens',
        data:{
          frameID: this.data.colors[this.data.selectedColor].productID,
          leftDegree: this.data.leftDegree,
          rightDegree: this.data.rightDegree,
          leftAstigmatism: this.data.leftAstigmatism,
          rightAstigmatism: this.data.rightAstigmatism
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          //console.log(res.data.data);
          _this.setData({
            enabledLens:res.data.data
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
      
    }
  }
})
