// components/actionSheet/actionSheet.js
const app = getApp();
const degreeList=[
  {
    id:0,
    content:"近视1200度(-12.00)",
    degree:"-12.00"
  },
  {
    id:1,
    content:"近视1175度(-11.75)",
    degree:"-11.75"
  },
  {
    id:2,
    content:"近视1150度(-11.50)",
    degree:"-11.50"
  },
  {
    id:3,
    content:"近视1125度(-11.25)",
    degree:"-11.25"
  },
  {
    id:4,
    content:"近视1100度(-11.00)",
    degree:"-11.00"
  },
  {
    id:5,
    content:"近视1075度(-10.75)",
    degree:"-10.75"
  },
  {
    id:6,
    content:"近视1050度(-10.50)",
    degree:"-10.50"
  },
  {
    id:7,
    content:"近视1025度(-10.25)",
    degree:"-10.25"
  },
  {
    id:8,
    content:"近视1000度(-10.00)",
    degree:"-10.00"
  },
  {
    id:9,
    content:"近视975度(-9.75)",
    degree:"-9.75"
  },
  {
    id:10,
    content:"近视950度(-9.50)",
    degree:"-9.50"
  },
  {
    id:11,
    content:"近视925度(-9.25)",
    degree:"-9.25"
  },
  {
    id:12,
    content:"近视900度(-9.00)",
    degree:"-9.00"
  },
  {
    id:13,
    content:"近视875度(-8.75)",
    degree:"-8.75"
  },
  {
    id:14,
    content:"近视850度(-8.50)",
    degree:"-8.50"
  },
  {
    id:15,
    content:"近视825度(-8.25)",
    degree:"-8.25"
  },
  {
    id:16,
    content:"近视800度(-8.00)",
    degree:"-8.00"
  },
  {
    id:17,
    content:"近视775度(-7.75)",
    degree:"-7.75"
  },
  {
    id:18,
    content:"近视750度(-7.50)",
    degree:"-7.50"
  },
  {
    id:19,
    content:"近视725度(-7.25)",
    degree:"-7.25"
  },
  {
    id:20,
    content:"近视700度(-7.00)",
    degree:"-7.00"
  },
  {
    id:21,
    content:"近视675度(-6.75)",
    degree:"-6.75"
  },
  {
    id:22,
    content:"近视650度(-6.50)",
    degree:"-6.50"
  },
  {
    id:23,
    content:"近视625度(-6.25)",
    degree:"-6.25"
  },
  {
    id:24,
    content:"近视600度(-6.00)",
    degree:"-6.00"
  },
  {
    id:25,
    content:"近视575度(-5.75)",
    degree:"-5.75"
  },
  {
    id:26,
    content:"近视550度(-5.50)",
    degree:"-5.50"
  },
  {
    id:27,
    content:"近视525度(-5.25)",
    degree:"-5.25"
  },
  {
    id:28,
    content:"近视500度(-5.00)",
    degree:"-5.00"
  },
  {
    id:29,
    content:"近视475度(-4.75)",
    degree:"-4.75"
  },
  {
    id:30,
    content:"近视450度(-4.50)",
    degree:"-4.50"
  },
  {
    id:31,
    content:"近视425度(-4.25)",
    degree:"-4.25"
  },
  {
    id:32,
    content:"近视400度(-4.00)",
    degree:"-4.00"
  },
  {
    id:33,
    content:"近视375度(-3.75)",
    degree:"-3.75"
  },
  {
    id:34,
    content:"近视350度(-3.50)",
    degree:"-3.50"
  },
  {
    id:35,
    content:"近视325度(-3.25)",
    degree:"-3.25"
  },
  {
    id:36,
    content:"近视300度(-3.00)",
    degree:"-3.00"
  },
  {
    id:37,
    content:"近视275度(-2.75)",
    degree:"-2.75"
  },
  {
    id:38,
    content:"近视250度(-2.50)",
    degree:"-2.50"
  },
  {
    id:39,
    content:"近视225度(-2.25)",
    degree:"-2.25"
  },
  {
    id:40,
    content:"近视200度(-2.00)",
    degree:"-2.00"
  },
  {
    id:41,
    content:"近视175度(-1.75)",
    degree:"-1.75"
  },
  {
    id:42,
    content:"近视150度(-1.50)",
    degree:"-1.50"
  },
  {
    id:43,
    content:"近视125度(-1.25)",
    degree:"-1.25"
  },
  {
    id:44,
    content:"近视100度(-1.00)",
    degree:"-1.00"
  },
  {
    id:45,
    content:"近视75度(-0.75)",
    degree:"-0.75"
  },
  {
    id:46,
    content:"近视50度(-0.50)",
    degree:"-0.50"
  },
  {
    id:47,
    content:"近视25度(-0.25)",
    degree:"-0.25"
  },
  {
    id:48,
    content:"平光(0.00)",
    degree:"0.00"
  },
  {
    id:49,
    content:"远视25度(+0.25)",
    degree:"+0.25"
  },
  {
    id:50,
    content:"远视50度(+0.50)",
    degree:"+0.50"
  },
  {
    id:51,
    content:"远视75度(+0.75)",
    degree:"+0.75"
  },
  {
    id:52,
    content:"远视100度(+1.00)",
    degree:"+1.00"
  },
  {
    id:53,
    content:"远视125度(+1.25)",
    degree:"+1.25"
  },
  {
    id:54,
    content:"远视150度(+1.50)",
    degree:"+1.50"
  },
  {
    id:55,
    content:"远视175度(+1.75)",
    degree:"+1.75"
  },
  {
    id:56,
    content:"远视200度(+2.00)",
    degree:"+2.00"
  },
  {
    id:57,
    content:"远视225度(+2.25)",
    degree:"+2.25"
  },
  {
    id:58,
    content:"远视250度(+2.50)",
    degree:"+2.50"
  },
  {
    id:59,
    content:"远视275度(+2.75)",
    degree:"+2.75"
  },
  {
    id:60,
    content:"远视300度(+3.00)",
    degree:"+3.00"
  },
  {
    id:61,
    content:"远视325度(+3.25)",
    degree:"+3.25"
  },
  {
    id:62,
    content:"远视350度(+3.50)",
    degree:"+3.50"
  },
  {
    id:63,
    content:"远视375度(+3.75)",
    degree:"+3.75"
  },
  {
    id:64,
    content:"远视400度(+4.00)",
    degree:"+4.00"
  },
  {
    id:65,
    content:"远视425度(+4.25)",
    degree:"+4.25"
  },
  {
    id:66,
    content:"远视450度(+4.50)",
    degree:"+4.50"
  },
  {
    id:67,
    content:"远视475度(+4.75)",
    degree:"+4.75"
  },
  {
    id:68,
    content:"远视500度(+5.00)",
    degree:"+5.00"
  },
  {
    id:69,
    content:"远视525度(+5.25)",
    degree:"+5.25"
  },
  {
    id:70,
    content:"远视550度(+5.50)",
    degree:"+5.50"
  },
  {
    id:71,
    content:"远视575度(+5.75)",
    degree:"+5.75"
  },
  {
    id:72,
    content:"远视600度(+6.00)",
    degree:"+6.00"
  }
]
const astigmatismList=[
  {
    id:0,
    content:"散光25度(-0.25)",
    degree:"-0.25"
  },
  {
    id:1,
    content:"散光50度(-0.50)",
    degree:"-0.50"
  },
  {
    id:2,
    content:"散光75度(-0.75)",
    degree:"-0.75"
  },
  {
    id:3,
    content:"散光100度(-1.00)",
    degree:"-1.00"
  },
  {
    id:4,
    content:"散光125度(-1.25)",
    degree:"-1.25"
  },
  {
    id:5,
    content:"散光150度(-1.50)",
    degree:"-1.50"
  },
  {
    id:6,
    content:"散光175度(-1.75)",
    degree:"-1.75"
  },
  {
    id:7,
    content:"散光200度(-2.00)",
    degree:"-2.00"
  },
]
const interpupillarys=[
  {
    frameID:"4B01_1",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4B01_3",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4B01_4",
    myopia:[56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    hyperopia:[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  },
  {
    frameID:"4C01_1",
    interpupillary:[49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]
  }
]
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
      value: ["散光25度(-0.25)","散光50度(-0.50)","散光75度(-0.75)","散光100度(-1.00)","散光125度(-1.25)","散光150度(-1.50)","散光175度(-1.75)","散光200度(-2.00)"]
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
      console.log(e.detail)
      var degree = degreeList.filter(item => {
        return item.content==e.detail
      })
      this.setData({
        leftDegree: degree[0].degree
      })
    },
    onRightDegreeChange:function(e){
      var degree = degreeList.filter(item => {
        return item.content==e.detail
      })
      this.setData({
        rightDegree: degree[0].degree
      })
    },
    onInterpupillaryChange:function(e){
      this.setData({
        interpupillary: e.detail
      })
    },

    onLeftAstigmatismChange:function(e){
      var astigmatism = astigmatismList.filter(item => {
        return item.content==e.detail
      })
      this.setData({
        leftAstigmatism: astigmatism[0].degree
      })
    },
    onRightAstigmatismChange:function(e){
      var astigmatism = astigmatismList.filter(item => {
        return item.content==e.detail
      })
      this.setData({
        rightAstigmatism: astigmatism[0].degree
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
