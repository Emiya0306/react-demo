// 依赖载入
import React, { Component, PropTypes } from 'react';

// 组件载入
import './spinner.scss';

// 组件创建
class Spinner extends Component {

  // 组件静态常量
  static propTypes = {
    skin: PropTypes.string,
  };

  // 页面渲染
  render() {
    const {skin} = this.props;
    const skinValue = skin || 'default';

    return (
      <div className={"Spinner " + skinValue}>
        <div className="Spinner__circle"></div>
        <div className="Spinner__running"></div>
      </div>
    );
  }

  // 组件公共方法
}

export default Spinner;
