// components/grid-tile-img/index.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 0,
    },
    height: {
      type: Number,
      value: 0,
    },
    index: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
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
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
