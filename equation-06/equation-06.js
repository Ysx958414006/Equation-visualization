import { createScopedThreejs } from 'threejs-miniprogram'
const { renderequation03 } = require('../test-cases/equation03.js')

const app = getApp()
Page({
  data: {
    color:"#0000ff",
    num:"500"
  },

  onLoad: function () {
    
  },
  onShow:function () {
    var that = this;
    wx.createSelectorQuery()
    .select('#webgl')
    .node()
    .exec((res) => {
      const canvas = res[0].node
      const THREE = createScopedThreejs(canvas)
      renderequation03(canvas ,THREE ,fun,color,num)
    })
    const fun = function (x,t) {
        return Math.cos(Math.pow(10,8)*t)*2*Math.sin(x);
  };
  const color=this.data.color;
  const num=this.data.num;
  },
  randomcolor:function(e){
    var color=["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
    "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
    "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
    "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
    "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"];
    var random = color[Math.floor(Math.random() * color.length)];
    this.setData({
      color:random,
    });
    this.onShow();
  },
  input:function(e){
    var a=e.detail.value/2;
      this.setData({
        num:a
      })
  },
  BtnClick:function(){
    if(this.data.num==0 ){
            wx.showToast({
        title: '顶点个数不能为空！',
        icon: 'none',
        duration: 2000//持续的时间
      })
          }else{
            this.onShow();
          }
  }

})


