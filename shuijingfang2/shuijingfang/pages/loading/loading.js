// pages/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"loading",
    windowWidth:375,
    windowHeight:1334
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
    this.x = -100

    let windowWidth = wx.getSystemInfoSync().windowWidth
    let windowHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      windowWidth:windowWidth,
      windowHeight:windowHeight
    })

    wx.createSelectorQuery().select('#myCanvas').fields({
      node: true,
      rect: true,
      size: true
    }).exec(this.init.bind(this))
  },
  init(res){
    const width = res[0].width
    const height = res[0].height

    const canvas = res[0].node
    const ctx = canvas.getContext('2d')

    // 设备像素比
    const dpr = wx.getSystemInfoSync().pixelRatio

    console.log("canvas wdith: "+width * dpr)
    
    canvas.width = width * dpr
    canvas.height = height * dpr
    //之后创建的路径其横纵坐标会被缩放 (1 = 100%，0.5 = 50%，2 = 200%)
    ctx.scale(dpr, dpr)

    const renderLoop = () => {
      this.render(canvas, ctx)
      canvas.requestAnimationFrame(renderLoop)
    }
    canvas.requestAnimationFrame(renderLoop)

    let img = canvas.createImage()
    img.src = './cloud10.png'
    img.onload = e => {
      this._cloud = img
    }
  },
  render(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Bg
    let gradient = ctx.createLinearGradient( 0,0,0, canvas.height );
    gradient.addColorStop(0, "#6294a7");
    gradient.addColorStop(0.4, "#85afb9");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.drawCloud(ctx)
  },
  drawCloud(ctx) {
    if (!this._cloud) return
    if (this.x > 375) {
      this.x = -100
    }
    ctx.drawImage(this._cloud, this.x++, 150 - 25, 100, 100)
    ctx.restore()
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

  }
})