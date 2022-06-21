// pages/craft/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verison: app.globalData.verison,
    timeAnimate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '井台•续谱传奇 传承新生',
      imageUrl: 'https://oss-shuzihuachanpinshouce.oss-cn-beijing.aliyuncs.com/jingtai/WXshare.jpg',
      path: '/page/index/index'
    }
  },

  onPageScroll(e) {
    let that = this
    if(e.scrollTop > 1700){
      that.setData({
        timeAnimate: 'timeAnimateOn'
      })
    }else{
      that.setData({
        timeAnimate: ''
      })
    }
  },

  btn_return_tap(){
    wx.navigateBack({
      delta: 1,
    })
  }
})