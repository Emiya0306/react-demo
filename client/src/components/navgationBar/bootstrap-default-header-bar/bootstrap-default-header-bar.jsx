import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './bootstrap-default-header-bar.scss';

class BootstrapDefaultHeaderBar extends Component {
  static propTypes = {
    skin: PropTypes.string,
    logo: PropTypes.object,
    leftMenus: PropTypes.array,
    rightMenus: PropTypes.array
  };

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

          {/* 导航条菜单按钮 */}
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
        <div className="App__navbar--background"
             style={{ backgroundImage: "url('http://i0.hdslb.com/group1/M00/B7/39/oYYBAFcsTcaAZIxsAAEhdDXQXEk973.jpg')" }}>
        </div>
        <div className="App__navbar--mask"></div>
      </nav>
    );
  }

  _forEachMenuItem(menus) {
    return menus.map((menu, key) =>
      <li key={key}>
        <Link to={menu.link}>
          {menu.name}
        </Link>
      </li>
    );
  }
}

export default BootstrapDefaultHeaderBar
