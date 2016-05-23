// 定义common, 接收ComposedComponent参数(React类), 并且返回扩展React类
const common = ComposedComponent => class extends ComposedComponent {

  // 构造器
  constructor(props) {
    super(props);
    this.state = {scrolling: 0};
  }

  componentDidMount() {
    // 文档监听scroll事件
    document.addEventListener('scroll', this._getDocumentScroll);
  }

  componentWillUnmount(){
    // 文档销毁scroll事件
    document.removeEventListener('scroll', this._getDocumentScroll);
  }

  // 扩展通用方法
  /**
   * 获取全局文档滚动
   * @param event
   * @returns {string|*|number}
   * @public
     */
  _getDocumentScroll = (event) => {
    this.setState({scrolling: event.srcElement.body.scrollTop});
    return event.srcElement.body.scrollTop;
  }
};

export default common;
