// pages/tasteDetails/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verison: app.globalData.verison,
    src: "https://oss-shuzihuachanpinshouce.oss-cn-beijing.aliyuncs.com/jingtai/",
    list: [{
      'name': '更陈',
      'gif': 'taste/p1.gif',
      'url': 'taste/p1_bg.png',
      'txt': 'taste/p1_text.png'
    }, {
      'name': '更柔',
      'gif': 'taste/p2.gif',
      'url': 'taste/p2_bg.png',
      'txt': 'taste/p2_text.png'
    }, {
      'name': '更香',
      'gif': 'taste/p3.gif',
      'url': 'taste/p3_bg.png',
      'txt': 'taste/p3_text.png'
    }, {
      'name': '更厚',
      'gif': 'taste/p4.gif',
      'url': 'taste/p4_bg.png',
      'txt': 'taste/p4_text.png'
    }, {
      'name': '更爽',
      'gif': 'taste/p5.gif',
      'url': 'taste/p5_bg.png',
      'txt': 'taste/p5_text.png'
    }, {
      'name': '更净',
      'gif': 'taste/p6.gif',
      'url': 'taste/p6_bg.png',
      'txt': 'taste/p6_text.png'
    }],
    isSwiperShow: false,
    indicatorDots: false, //下标
    vertical: false,
    autoplay: true,  //自动播放
    circular: true,  //循环
    interval: 3000,
    duration: 800,
    currentIndex: 0
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
  btn_return_tap(){
    wx.navigateBack({
      delta: 1,
    })
  },
  bindchange(e){
    this.setData({
      currentIndex:e.detail.current
    })
    console.log("index: "+e.detail.current);
  }
})