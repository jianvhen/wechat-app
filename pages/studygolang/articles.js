Page({
  data: {
    art: {},
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad(options) {
    var that = this
    wx.setStorage({
        key: 'index',
        data: 13246,
      }),
      wx.getStorage({
        key: 'index',
        success: function(res) {
          var page = res.data
          wx.request({
            url: 'https://studygolang.com/articles/' + page,
            method: 'get',
            success(res) {
              console.log(res.data)
              that.setData({
                art: res.data
              })
            },
          })
        },
      })
  }
})