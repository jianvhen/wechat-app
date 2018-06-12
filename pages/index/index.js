App({
  onLaunch: function () {
  }
})

Page({
  data: {
    display: false,
    userInfo: {},
  },
  clickMe: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          displays: true,
          nickName: res.userInfo.nickName,
          welcome: "你好，"
          // avatarUrl: res.userInfo.avatarUrl,
        })
      },
    })
  }
})