var md5 = require('./md5.js');

var url = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
var appid = '20180611000175026';
var key = 'cbCkMGis5aDL7bJmx86e';
var salt = (new Date).getTime();

Page({
  data: {
  },

  //设置输入框的值
  bindInput: function (e) {
    var that = this;
    that.setData({
      inputValue: e.detail.value
    });
  },

  searchquery: function(e) {
    var that = this;
    //数据加载完成之前，显示加载中提示框
    wx.showToast({
      title: '翻译中。。。',
      icon: 'loading',
      duration: 10000
    });

    //输入框没有输入的判断
    if (that.data.inputValue == '') {
      wx.hideToast();
      return;
    } else {
      var str1 = appid + that.data.inputValue + salt + key;
      // var sign = md5.MD5(str1);
    }
    //发起请求，注意 wx.request发起的是 HTTPS 请求
    wx.request({
      url: url,
      data: {
        q: that.data.inputValue,
        appid: appid,
        salt: salt,
        sign: md5.MD5(str1),
        from: 'auto',
        to: 'zh'
      },
      method: 'GET',
      dataType: 'jsonp',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = JSON.parse(res.data);
        //将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
        console.log(data)
        that.setData({
          context: data.trans_result
        });
        //数据加载成功后隐藏加载中弹框
        wx.hideToast();
      }
    })
  }
})