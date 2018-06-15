App({
  onLaunch: function () {
  }
})

Page({
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接     
      urls: this.data.imgalist // 需要预览的图片http链接列表     
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）  
      src: 'https://lg-6pk3fsee-1256882984.cos.ap-shanghai.myqcloud.com/zsm.jpg',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})