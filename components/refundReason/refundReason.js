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
      value: ['多拍/错拍/不想要','我不想要了','大小/尺寸描述与实物不符','材质与实物不符','质量/有瑕疵','发错了','朋友/网上评价不好']
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
    }
  }
})
