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
  }
})