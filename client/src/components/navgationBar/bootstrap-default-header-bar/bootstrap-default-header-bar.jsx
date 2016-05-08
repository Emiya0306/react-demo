import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class BootstrapDefaultHeaderBar extends Component {
  static propTypes = {
    leftMenus: PropTypes.array,
    rightMenus: PropTypes.array
  };

  render() {
    const {leftMenus, rightMenus} = this.props;
    const styles = require('./bootstrap-default-header-bar.scss');
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              { this._forEachMenuItem(leftMenus) }
            </ul>
          </div>
        </div>
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
