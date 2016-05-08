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
      <div>
        { this._forEachMenuItem(leftMenus) }
      </div>
    );
  }

  _forEachMenuItem(menus) {
    return menus.map((menu, key) =>

      <Link key={key} to={menu.link}>
        {menu.name}
      </Link>

    );
  }
}

export default BootstrapDefaultHeaderBar
