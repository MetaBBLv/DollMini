// pages/shop/shop.ts
interface CardItem {
  image: string;
  title: string;
  description: string;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [] as CardItem[]
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
    // 初始化 cardList 数组
    this.setData({
      cardList: [
        { image: '/image/icon_ORCode.png', title: 'Apple AirPods Pro 无损降噪耳机', description: '兑换积分：50\n剩余数量：10' },
        { image: '/image/icon_header_2.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_header_1.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_1.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_2.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_3.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_4.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_5.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        { image: '/image/icon_banner_forest_6.png', title: '卡片标题2', description: '这是卡片2的描述内容' },
        // 更多卡片数据...
      ]
    });
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

  }
})