// pages/rank/rank.ts
interface Ranking {
  id: number;
  rank: number;
  avatar: string;
  username: string;
  description: string;
  scoreIcon: string;
  score: number;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    rankings: [] as Ranking[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      rankings: [
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        { id: 1, rank: 1, avatar: '/image/icon_header_1.png', username: '用户名1', description: '描述信息1', scoreIcon: '/image/icon_integral.png', score: 100 },
        { id: 2, rank: 2, avatar: '/image/icon_header_2.png', username: '用户名2', description: '描述信息2', scoreIcon: '/image/icon_integral.png', score: 90 },
        // 其他排行榜数据...
      ]
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
})