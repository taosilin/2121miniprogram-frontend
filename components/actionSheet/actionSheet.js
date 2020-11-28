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
      value: [0.00,-0.25,-0.50,-0.75,-1.00,-1.25,-1.50,-1.75,-2.00]
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
    leftDegree: 0.00,
    rightDegree: 0.00,
    interpupillary: 0,
    leftAstigmatism: 0.00,
    rightAstigmatism: 0.00,
    leftAxis: 0,
    rightAxis: 0,
    enabledLens:[
              {
                  "lensName": "4K超清镜片",
                  "description": "看书清晰度MAX，色彩完美还原，透光率高达99.4%。看得清才能记得牢，是日常看书和备战四六级的好帮手。",
                  "specs":[
                    {
                      "lensID": "018",
                      "lensName": "4K超清镜片",
                      "price": 0.00,
                      "refractiveIndex": "1.60性价比之王",
                      "material": "PC",
                      "radian": "非球面",
                      "variety": "光学",
                      "film": "绿膜",
                      "design": "单光",
                      "state": "1",
                      "stock": 100,
                      "description": "在2121星球又名：超加硬超防水UV400非球面绿膜镜片。"
                    },
                    {
                      "lensID": "003",
                      "lensName": "4K超清镜片",
                      "price": 50.00,
                      "refractiveIndex": "1.67经典精致款",
                      "material": "PC",
                      "radian": "非球面",
                      "variety": "光学",
                      "film": "绿膜",
                      "design": "单光",
                      "state": "1",
                      "stock": 100,
                      "description": "在2121星球又名：超加硬超防水UV400非球面绿膜镜片。"
                    },
                    {
                      "lensID": "019",
                      "lensName": "4K超清镜片",
                      "price": 300.00,
                      "refractiveIndex": "1.74高度数福利",
                      "material": "PC",
                      "radian": "非球面",
                      "variety": "光学",
                      "film": "绿膜",
                      "design": "单光",
                      "state": "1",
                      "stock": 100,
                      "description": "在2121星球又名：超加硬超防水UV400非球面绿膜镜片。"
                    }
                  ]
              },
      {
                    "lensName": "电子防护镜片",
                    "description": "不误砍柴功，有效过滤有害蓝光，阻挡99%+UVA、UVB紫外线。时刻守护长时间查资料写论文和编写代码的你。",
                    "specs":[
                      {
                        "lensID": "020",
                        "lensName": "电子防护镜片",
                        "price": 0.00,
                        "refractiveIndex": "1.60性价比之王",
                        "material": "PC",
                        "radian": "非球面",
                        "variety": "光学",
                        "film": "绿膜",
                        "design": "单光",
                        "state": "1",
                        "stock": 100,
                        "description": "在2121星球又名：符合新国标的具有专利ESPF15防晒功能的抗蓝光和防紫外线双效非球面镜片。"
                      },
                      {
                        "lensID": "004",
                        "lensName": "电子防护镜片",
                        "price": 50.00,
                        "refractiveIndex": "1.67经典精致款",
                        "material": "PC",
                        "radian": "非球面",
                        "variety": "光学",
                        "film": "绿膜",
                        "design": "单光",
                        "state": "1",
                        "stock": 100,
                        "description": "在2121星球又名：符合新国标的具有专利ESPF15防晒功能的抗蓝光和防紫外线双效非球面镜片。"
                      }
                    ]
                }
          ]
      
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏菜单
    hideSheet: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示菜单
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
      this.setData({
        selectTab:2
      })
    },
    onTypeChange:function(e){
      let id = e.currentTarget.dataset.id;
      this.setData({
        optionType:id
      })
    },
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

      wx.request({
        url: app.globalData.host+'/cart/add',
        data:{
          userID: app.globalData.phoneNumber,
          productID: this.data.colors[this.data.selectedColor].productID,
          specID: this.data.colors[this.data.selectedColor].specID,
          num: 1,
          lensID: "Lens001",
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
          console.log("请求失败");
        }
      })
    },

    // 立即购买
    onComplete:function(){
      this.setData({
        flag: !this.data.flag
      });
      let buySpec = JSON.stringify([{
        cart:{
          lensID: "Lens001",
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



    onConfirm:function(e){
      console.log(e);
      console.log(this.data)
    }
  }
})
