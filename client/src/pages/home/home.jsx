import React, {Component, PropTypes} from 'react';

export default class Home extends Component {
  // 组件属性
  static propTypes = {
  };

  // 组件被创建时,触发构造器
  constructor(props) {
    super(props);
  }

  // 当组件即将被挂载 Note:发生在render之前
  componentWillMount() {
  }

  // 当组件即将被挂载 Note:发生在render之后
  componentDidMount() {
  }

  // 页面渲染
  render() {
    const styles = require('./home.scss');

    return (
      <div>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
    );
  }
}
