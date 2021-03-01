// pages/addPrescription/addPrescription.js
const app = getApp();
const degreeList=[
  {
    id:0,
    content:"远视600度(+6.00)",
    degree:"+6.00"
  },
  {
    id:1,
    content:"远视575度(+5.75)",
    degree:"+5.75"
  },
  {
    id:2,
    content:"远视550度(+5.50)",
    degree:"+5.50"
  },
  {
    id:3,
    content:"远视525度(+5.25)",
    degree:"+5.25"
  },
  {
    id:4,
    content:"远视500度(+5.00)",
    degree:"+5.00"
  },
  {
    id:5,
    content:"远视475度(+4.75)",
    degree:"+4.75"
  },
  {
    id:6,
    content:"远视450度(+4.50)",
    degree:"+4.50"
  },
  {
    id:7,
    content:"远视425度(+4.25)",
    degree:"+4.25"
  },
  {
    id:8,
    content:"远视400度(+4.00)",
    degree:"+4.00"
  },
  {
    id:9,
    content:"远视375度(+3.75)",
    degree:"+3.75"
  },
  {
    id:10,
    content:"远视350度(+3.50)",
    degree:"+3.50"
  },
  {
    id:11,
    content:"远视325度(+3.25)",
    degree:"+3.25"
  },
  {
    id:12,
    content:"远视300度(+3.00)",
    degree:"+3.00"
  },
  {
    id:13,
    content:"远视275度(+2.75)",
    degree:"+2.75"
  },
  {
    id:14,
    content:"远视250度(+2.50)",
    degree:"+2.50"
  },
  {
    id:15,
    content:"远视225度(+2.25)",
    degree:"+2.25"
  },
  {
    id:16,
    content:"远视200度(+2.00)",
    degree:"+2.00"
  },
  {
    id:17,
    content:"远视175度(+1.75)",
    degree:"+1.75"
  },
  {
    id:18,
    content:"远视150度(+1.50)",
    degree:"+1.50"
  },
  {
    id:19,
    content:"远视125度(+1.25)",
    degree:"+1.25"
  },
  {
    id:20,
    content:"远视100度(+1.00)",
    degree:"+1.00"
  },
  {
    id:21,
    content:"远视75度(+0.75)",
    degree:"+0.75"
  },
  {
    id:22,
    content:"远视50度(+0.50)",
    degree:"+0.50"
  },
  {
    id:23,
    content:"远视25度(+0.25)",
    degree:"+0.25"
  },
  {
    id:24,
    content:"平光(0.00)",
    degree:"0.00"
  },
  {
    id:25,
    content:"近视25度(-0.25)",
    degree:"-0.25"
  },
  {
    id:26,
    content:"近视50度(-0.50)",
    degree:"-0.50"
  },
  {
    id:27,
    content:"近视75度(-0.75)",
    degree:"-0.75"
  },
  {
    id:28,
    content:"近视100度(-1.00)",
    degree:"-1.00"
  },
  {
    id:29,
    content:"近视125度(-1.25)",
    degree:"-1.25"
  },
  {
    id:30,
    content:"近视150度(-1.50)",
    degree:"-1.50"
  },
  {
    id:31,
    content:"近视175度(-1.75)",
    degree:"-1.75"
  },
  {
    id:32,
    content:"近视200度(-2.00)",
    degree:"-2.00"
  },
  {
    id:33,
    content:"近视225度(-2.25)",
    degree:"-2.25"
  },
  {
    id:34,
    content:"近视250度(-2.50)",
    degree:"-2.50"
  },
  {
    id:35,
    content:"近视275度(-2.75)",
    degree:"-2.75"
  },
  {
    id:36,
    content:"近视300度(-3.00)",
    degree:"-3.00"
  },
  {
    id:37,
    content:"近视325度(-3.25)",
    degree:"-3.25"
  },
  {
    id:38,
    content:"近视350度(-3.50)",
    degree:"-3.50"
  },
  {
    id:39,
    content:"近视375度(-3.75)",
    degree:"-3.75"
  },
  {
    id:40,
    content:"近视400度(-4.00)",
    degree:"-4.00"
  },
  {
    id:41,
    content:"近视425度(-4.25)",
    degree:"-4.25"
  },
  {
    id:42,
    content:"近视450度(-4.50)",
    degree:"-4.50"
  },
  {
    id:43,
    content:"近视475度(-4.75)",
    degree:"-4.75"
  },
  {
    id:44,
    content:"近视500度(-5.00)",
    degree:"-5.00"
  },
  {
    id:45,
    content:"近视525度(-5.25)",
    degree:"-5.25"
  },
  {
    id:46,
    content:"近视550度(-5.50)",
    degree:"-5.50"
  },
  {
    id:47,
    content:"近视575度(-5.75)",
    degree:"-5.75"
  },
  {
    id:48,
    content:"近视600度(-6.00)",
    degree:"-6.00"
  },
  {
    id:49,
    content:"近视625度(-6.25)",
    degree:"-6.25"
  },
  {
    id:50,
    content:"近视650度(-6.50)",
    degree:"-6.50"
  },
  {
    id:51,
    content:"近视675度(-6.75)",
    degree:"-6.75"
  },
  {
    id:52,
    content:"近视700度(-7.00)",
    degree:"-7.00"
  },
  {
    id:53,
    content:"近视725度(-7.25)",
    degree:"-7.25"
  },
  {
    id:54,
    content:"近视750度(-7.50)",
    degree:"-7.50"
  },
  {
    id:55,
    content:"近视775度(-7.75)",
    degree:"-7.75"
  },
  {
    id:56,
    content:"近视800度(-8.00)",
    degree:"-8.00"
  },
  {
    id:57,
    content:"近视825度(-8.25)",
    degree:"-8.25"
  },
  {
    id:58,
    content:"近视850度(-8.50)",
    degree:"-8.50"
  },
  {
    id:59,
    content:"近视875度(-8.75)",
    degree:"-8.75"
  },
  {
    id:60,
    content:"近视900度(-9.00)",
    degree:"-9.00"
  },
  {
    id:61,
    content:"近视925度(-9.25)",
    degree:"-9.25"
  },
  {
    id:62,
    content:"近视950度(-9.50)",
    degree:"-9.50"
  },
  {
    id:63,
    content:"近视975度(-9.75)",
    degree:"-9.75"
  },
  {
    id:64,
    content:"近视1000度(-10.00)",
    degree:"-10.00"
  },
  {
    id:65,
    content:"近视1025度(-10.25)",
    degree:"-10.25"
  },
  {
    id:66,
    content:"近视1050度(-10.50)",
    degree:"-10.50"
  },
  {
    id:67,
    content:"近视1075度(-10.75)",
    degree:"-10.75"
  },
  {
    id:68,
    content:"近视1100度(-11.00)",
    degree:"-11.00"
  },
  {
    id:69,
    content:"近视1125度(-11.25)",
    degree:"-11.25"
  },
  {
    id:70,
    content:"近视1150度(-11.50)",
    degree:"-11.50"
  },
  {
    id:71,
    content:"近视1175度(-11.75)",
    degree:"-11.75"
  },
  {
    id:72,
    content:"近视1200度(-12.00)",
    degree:"-12.00"
  }
]
const astigmatismList=[
  {
    id:0,
    content:"散光度数",
    degree:null
  },
  {
    id:1,
    content:"散光25度(-0.25)",
    degree:"-0.25"
  },
  {
    id:2,
    content:"散光50度(-0.50)",
    degree:"-0.50"
  },
  {
    id:3,
    content:"散光75度(-0.75)",
    degree:"-0.75"
  },
  {
    id:4,
    content:"散光100度(-1.00)",
    degree:"-1.00"
  },
  {
    id:5,
    content:"散光125度(-1.25)",
    degree:"-1.25"
  },
  {
    id:6,
    content:"散光150度(-1.50)",
    degree:"-1.50"
  },
  {
    id:7,
    content:"散光175度(-1.75)",
    degree:"-1.75"
  },
  {
    id:8,
    content:"散光200度(-2.00)",
    degree:"-2.00"
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prescriptionID: null,
    prescriptionName: null,
    leftDegree: null,
    rightDegree: null,
    interpupillary: null,
    leftAstigmatism: null,
    rightAstigmatism: null,
    leftAxis: null,
    rightAxis: null,
    interpupillarys: [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
    astigmatisms: ["散光度数","散光25度(-0.25)","散光50度(-0.50)","散光75度(-0.75)","散光100度(-1.00)","散光125度(-1.25)","散光150度(-1.50)","散光175度(-1.75)","散光200度(-2.00)"],
    axiss: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180],
    isNew: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.info!=undefined){
      var info = JSON.parse(options.info);
      this.setData({
        prescriptionID: info.prescriptionID,
        prescriptionName: info.prescriptionName,
        leftDegree: info.leftDegree,
        rightDegree: info.rightDegree,
        interpupillary: info.interpupillary,
        leftAstigmatism: info.leftAstigmatism,
        rightAstigmatism: info.rightAstigmatism,
        leftAxis: info.leftAxis,
        rightAxis: info.rightAxis,
        isNew:false
      })
    }
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

  },
  // 添加验光单
  onAdd: function(){
    if (this.data.prescriptionName==null){
      // 未输入验光单名称
      wx.showToast({
        title: '请输入光度主人名称',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.leftDegree==null||this.data.rightDegree==null){
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
        title: '您选择的度数为0，如需购买平光镜，可在购买时直接选择【购买平光】',
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
      if (this.data.leftAstigmatism==null){
        this.setData({
          leftAstigmatism: null,
          leftAxis: null
        })
      }
      if (this.data.rightAstigmatism==null){
        this.setData({
          rightAstigmatism: null,
          rightAxis: null
        })
      }
      wx.request({
        url: app.globalData.host + '/prescription/add',
        data:{
          prescriptionID: (new Date()).getTime().toString(),
          userID: app.globalData.openid,
          prescriptionName: this.data.prescriptionName,
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
          wx.navigateBack({
            delta:1,
          });
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
  },
  
  // 修改验光单
  onUpdate: function(){
    if (this.data.prescriptionName==null){
      // 未输入验光单名称
      wx.showToast({
        title: '请输入光度主人名称',
        icon: 'none',
        duration: 2000
      });
    }
    else if (this.data.leftDegree==null||this.data.rightDegree==null){
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
        title: '您选择的度数为0，如需购买平光镜，可在购买时直接选择【购买平光】',
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
      if (this.data.leftAstigmatism==null){
        this.setData({
          leftAstigmatism: null,
          leftAxis: null
        })
      }
      if (this.data.rightAstigmatism==null){
        this.setData({
          rightAstigmatism: null,
          rightAxis: null
        })
      }
      wx.request({
        url: app.globalData.host + '/prescription/update',
        data:{
          prescriptionID: this.data.prescriptionID,
          prescriptionName: this.data.prescriptionName,
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
          wx.navigateBack({
            delta:1,
          });
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
  },

  // 删除验光单
  onDelete: function(){
    var _this = this;

    wx.showModal({
      title: '警告',
      content: '确定删除该验光单？此操作不可恢复',
      success(res) {
        if (res.confirm) {
          //console.log('确定删除');
          wx.request({
            url: app.globalData.host + '/prescription/delete',
            data: {
              prescriptionID: _this.data.prescriptionID
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'//默认值
            },
            success: function (res) {
              wx.navigateBack({
                delta:1,
              });
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 2000
              });
            },
            fail: function (res) {
              console.log(res);
            }
          })
        } else if (res.cancel) {
          //console.log('取消删除')
        }
      }
    });
  },

  onPrescriptionNameChange:function(e){
    this.setData({
      prescriptionName:e.detail.value
    })
  },
  onLeftDegreeChange:function(e){
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
  }
})