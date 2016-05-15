// 依赖载入
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// 组件载入
import NavItem from '../../navigationBarItem/item.jsx';
import './bootstrap-default-header-bar.scss';

// 组件创建
class BootstrapDefaultHeaderBar extends Component {

  // 组件静态常量
  static propTypes = {
    skin: PropTypes.string,
    logo: PropTypes.object,
    leftMenus: PropTypes.array,
    rightMenus: PropTypes.array
  };

  // 组件被创建时,触发构造器
  constructor(props) {
    super(props);
  }

  // 页面渲染
  render() {
    const {skin, logo, leftMenus, rightMenus} = this.props;
    const skinValue = skin || 'default';
    return (
      <nav className={ "navbar App__navbar " + skinValue }>
        {/* 导航条本体 */}
        <div className="container App__navbar--container">

          {/* 导航条Logo */}
          <div className="navbar-header">
            <a className="navbar-brand" href={logo.link}>{logo.name}</a>
          </div>

          {/* 导航条菜单按钮主体:在小于视口的时候会消失 */}
          <div className="collapse navbar-collapse">

            {/* 导航条左浮按钮 */}
            <ul className="nav navbar-nav">
              { this._forEachMenuItem(leftMenus) }
            </ul>

            {/* 导航条右浮按钮 */}
            <ul className="nav navbar-nav navbar-right">
              { this._forEachMenuItem(rightMenus) }
            </ul>

          </div>

        </div>

        {/* 导航条背景 */}
        <div className="App__navbar--background">
          <div className="App__navbar--background-image"
               style={{ backgroundImage: "url('http://i0.hdslb.com/group1/M00/B7/39/oYYBAFcsTcaAZIxsAAEhdDXQXEk973.jpg')" }}>
          </div>
          <div className="App__navbar--background-mask"></div>
        </div>
      </nav>
    );
  }

  // 组件公共方法
  _forEachMenuItem(menus) {
    return menus.map((menu, key) =>
      <NavItem key={key} skin={this.props.skin} item={menu}/>
    );
  }

  _fixNavigationBar() {

  }
}

export default BootstrapDefaultHeaderBar
