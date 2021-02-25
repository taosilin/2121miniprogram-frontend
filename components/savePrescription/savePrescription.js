// components/savePrescription/savePrescription.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    flag:{
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    prescriptionName: null,
    leftDegree: null,
    rightDegree: null,
    interpupillary: null,
    leftAstigmatism: null,
    rightAstigmatism: null,
    leftAxis: null,
    rightAxis: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭对话框
    hideDialog: function () {
      this.setData({
        flag: true
      })
    },

    // 显示对话框
    showDialog: function (leftDegree,rightDegree,interpupillary,leftAstigmatism,rightAstigmatism,leftAxis,rightAxis) {
      this.setData({
        flag: false,
        leftDegree: leftDegree,
        rightDegree: rightDegree,
        interpupillary: interpupillary,
        leftAstigmatism: leftAstigmatism,
        rightAstigmatism: rightAstigmatism,
        leftAxis: leftAxis,
        rightAxis: rightAxis
      })
    },

    onPrescriptionNameChange:function(e){
      this.setData({
        prescriptionName:e.detail.value
      })
    },
    // 保存验光单
    onSave:function(e){
      var _this = this;
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
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          });
          _this.setData({
            flag: true
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    },
    // 取消保存
    onCancel:function(e){
      this.setData({
        flag: true
      });
    }
  }
})
