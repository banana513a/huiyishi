//app.js
App({
  onLaunch: function () {

  },
  getRequest: function(url,callback){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      success: function(res) {
        if(callback && typeof callback == 'function'){
          callback(res)
          wx.hideToast()
        }
      }
    })
  },
  getScanning: function(){
    wx.scanCode({
      success: (res) => {
        var result = res.result
        result = result.replace('http://','')
        wx.navigateTo({
          url: '../'+result
        })
      },
      fail: (res) => {
        wx.showModal({
          title: '提示',
          content: res.errMsg,
          success: function(res) {
          }
        })
      }
    })
  },
  setStorageUser: function(params,callback){
    var that = this;
    wx.setStorage({
      key:'userInfo',
      data:params,
      success: function(res) {
        if(callback && typeof callback == 'function'){
          callback(res)
        }
      }
    });
  }
})