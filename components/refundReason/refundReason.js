// components/refundReason/refundReason.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    flag:{
      type: Boolean,
      value: true
    },
    reasons:{
      type: Array,
      value: ['多拍/错拍/需要重拍','不想要了','未按约定时间发货']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedReason: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 确认选择
    onConfirm: function () {
      this.triggerEvent("reasonConfirm",this.data.selectedReason);
      this.setData({
        flag: true
      })
    },
    // 选择原因
    radioChange:function(e){
      this.setData({
        selectedReason: e.detail.value
      })   
    },
    onClose:function(e){
      this.setData({
        flag: !this.data.flag
      })
    },
    onOpen:function(e){
      
    }
  }
})
