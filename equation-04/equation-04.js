// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderequation } = require('../test-cases/equation.js')

const app = getApp()
Page({
  data: {
    color:"#0000ff",
    num:"1000"
  },

  onLoad: function () {

  },
  onShow:function () {
    wx.createSelectorQuery()
    .select('#webgl')
    .node()
    .exec((res) => {
      const canvas = res[0].node
      const THREE = createScopedThreejs(canvas)
      renderequation(canvas, THREE,fun,color,num)
    })
    const fun = function ( x) {
  
      return  Math.sqrt(1+2*x)
      
    };
    const color=this.data.color;
    const num=this.data.num;
  
  },
  randomcolor:function(e){
    var that = this;
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
    var a=e.detail.value;
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



