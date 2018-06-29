Page({
  data: {
  },

  translate: function (e) {
    var that = this;
    wx.navigateTo({
      url: '../../pages/translate/index'
    })
  },

  map: function (e) {
    var that = this;
    wx.navigateTo({
      url: '../../pages/map/index'
    })
  },

  zhihu: function (e) {
    wx.navigateTo({
      url: '../../pages/zhihu/index'
    })
  },

  gostudy: function (e) {
    wx.navigateTo({
      url: '../../pages/studygolang/articles'
    })
  }
})