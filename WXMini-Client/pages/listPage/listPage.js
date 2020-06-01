// pages/listPage/listPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemTextWidth: 0,
    devicesList: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    const systemInfo = wx.getSystemInfoSync()

    that.setData({
      itemTextWidth: (systemInfo.windowWidth - 72 - 24)
    })
    wx.setNavigationBarTitle({
      title: that.options.type
    })

    wx.request({
      url: "http://localhost:8086/device/list", //仅为示例，并非真实的接口地址
      data: {
        type: that.options.type
      },
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var recvData = res.data

        console.log(recvData)

        for (var index = 0; index < recvData.length; index++) {
          var item = recvData[index]
          item.proPicUri = item.proPicUri.replace("cpu_thumbnails", "cpu_pictures")
        }
        
        that.setData({
          devicesList: recvData
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})