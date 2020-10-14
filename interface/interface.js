const app = getApp()

Page({
  data: {},
  onLoad: function () {

  },
  yes:function(){
    wx.navigateTo({
      url: '../catalog/catalog',
    })

  },
  
  exit(){
    app.globalData.flag=true;
    wx.reLaunch({
     url: '../interface/interface',
    })  
   },

})
