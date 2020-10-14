// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderweifen } = require('../test-cases/weifen.js')

const app = getApp()
Page({
  data: {
    color:"#0000ff",
    lattices:true
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
      renderweifen(canvas, THREE,fun,lattice,color)
    })
    const fun = function ( x, y, z, t, target ) {
      if ( x * x + y * y < 0.01 ) {

        return target.set( 0, 0, 0 );

      } else {

        var rho = Math.sqrt( x * x + y * y );
        var phi = Math.atan2( y, x );

        return target.set( 1.5 * Math.cos( phi ) * Math.sin( rho - t ) / Math.sqrt( rho ), 1.5 * Math.sin( phi ) * Math.sin( rho - t ) / Math.sqrt( rho ), 0 );

      }
  };
    const lattice=this.data.lattices;
    const color=this.data.color;
  },
  onTouch: function(event) {
    // console.log(event);
    // this.setData({
    //   touchPos: event.changedTouches[0]
    // });
    app.globalData.pos = event.changedTouches[0];
    app.globalData.touchPos = event.changedTouches[0];
    app.globalData.rotate = true;
  },

  onMove: function(event) {
    // console.log(event);

    // this.setData({
    //   touchPos: event.changedTouches[0]
    // });
    app.globalData.pos = app.globalData.touchPos;
    app.globalData.touchPos = event.changedTouches[0];
    // console.log(event);
    // console.log(app.globalData.touchPos)
  },
  onEnd: function(event) {
    app.globalData.rotate = false;
    // console.log(app.globalData)
  },
  suiji:function(e){
    var that = this;
    this.setData({
      lattices:false,
    });
    this.onShow();
  },
  liti:function(e){
    var that = this;
    this.setData({
      lattices:true,
    });
    this.onShow();
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
  }
  
})


