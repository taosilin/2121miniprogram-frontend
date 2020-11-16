// components/tab/tab.js
const themes={
  smallBar:"smallBar"
}
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[],
  properties: {
    // 标签内容
    tabs:{
      type: Array,
      value: ['item1', 'item2', 'item3', 'item4', 'item5'],
      observer:function(newVal){
        if (newVal&&newVal.length<5){
          this.setData({
            itemWidth:(750/newVal.length)-60
          })
        }
      }
    },
    //标签栏高度(rpx)
    height:{
      type:String,
      value:'78'
    },
    //未选中标签文字颜色
    textColor:{
      type:String,
      value:'#666666'
    },
    //选中标签文字颜色
    selectTextColor:{
      type:String,
      value:'#666666'
    },
    //标签文字大小(rpx)
    textSize:{
      type:String,
      value:'28'
    },
    //选中滑动条颜色
    selectColor:{
      type:String,
      value:'#8493DF'
    },
    //标签字间距(rpx)
    letterSpacing:{
      type:String,
      value:'1'
    },
    //选中加粗
    selectBold:{
        type:String,
        value:'normal'
    },
    selected:{
      type:String,
      value:'0',
      observer:function(newVal){
        this.setData({
          mSelected:newVal
        })
      }
    },
    theme:{
      type:String,
      value:'default',
      observer:function(newVal){
        if(this.data.theme==themes.smallBar){
          this.setData({
            bottom:this.data.height/2-this.data.textSize-8,
            scrollStyle:''
          })
        }
      }
    },
    dataCus:{
      type:Array,
      value:'',
      observer:function(newVal){
        this.setData({
          mDataCus:newVal
        });
      }
    }
  },

  /**
   * 组件的初始数据，私有数据
   */
  data: {
    itemWidth:128,
    isScroll:true,
    scrollStyle:'border-bootom:1px solid #EAEAEA;',
    left:'0',
    right:'750',
    bottom:'0',
    mSelected:'0',
    lastIndex:0,
    transition:'left 0.5s,right 0.2s',
    windowWidth:375,
    domData:[],
    textDomData:[],
    mDataCus:[]
  },
  externalClasses:['cus'],
  /**
   * 组件的方法列表
   */
  methods: {
    barLeft:function(index,dom){
      let that = this;
      let itemWidth = this.data.itemWidth;
      this.setData({
        left:dom[index].left-itemWidth*0.25
      })
    },
    barRight:function(index,dom){
      let that = this;
      let itemWidth = this.data.itemWidth;
      this.setData({
        right:that.data.windowWidth-dom[index].right-itemWidth*0.25
      })
    },
    onItemTap:function(e){
      const index = e.currentTarget.dataset.index;
      let str = this.data.lastIndex<index?'left 0.5s,right 0.2s':'left 0.2s,right 0.5s';
      this.setData({
        transition:str,
        lastIndex:index,
        mSelected:index
      });
      if(this.data.theme==themes.smallBar){
        this.barLeft(index,this.data.textDomData);
        this.barRight(index,this.data.textDomData);
      }else{
        this.barLeft(index,this.data.domData);
        this.barRight(index, this.data.domData);
      }
      this.triggerEvent('itemtap',index,{bubbles:true});
    }
  },
  lifetimes:{
    ready:function(){
      let that=this;
      const sysInfo = wx.getSystemInfoSync();
      this.setData({
        windowWidth:sysInfo.windowWidth
      });
      const query = this.createSelectorQuery();
      query.in(this).selectAll('.item').fields({
        dataset:true,
        rect:true,
        size:true
      },function(res){
        that.setData({
          domData:res
        })
        that.barLeft(that.data.mSelected,that.data.domData);
        that.barRight(that.data.mSelected, that.data.domData);
      }).exec();
      query.in(this).selectAll('.text').fields({
        dataset:true,
        rect:true,
        size:true
      },function(res){
        that.setData({
          textDomData:res
        })
        if(that.data.theme==themes.smallBar){
          that.barLeft(that.data.mSelected,that.data.textDomData);
          that.barRight(that.data.mSelected,that.data.textDomData);
        }
      }).exec()
    }
  }
})
