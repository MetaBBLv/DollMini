// pages/shop/shop.ts
import { generateGridList } from '../../utils/util';

interface PageData {
  crossAxisCount: number;
  crossAxisGap: number;
  mainAxisGap: number;
  gridList: { id: number; sub: number; commodity:string; exchangeNum: number; inventory: number }[];
}

const initData: PageData = {
  crossAxisCount: 2,
  crossAxisGap: 8,
  mainAxisGap: 8,
  gridList: generateGridList(100, 4),
};



Page({

  /**
   * 页面的初始数据
   */
  data: initData,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  onGridViewTap(event: any) {
    // 处理点击事件的逻辑
    const { index } = event.currentTarget.dataset;
    console.log('点击了第', index, '个 grid-item');
  },

  onSearch() {
    // 处理搜索逻辑
    console.log("点击了搜索");
    
  }

})