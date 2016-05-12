import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './item.scss';

class NavItem extends Component {
  static propTypes = {
    skin: PropTypes.string,
    item: PropTypes.object
  };

  render() {
    const {skin, item } = this.props;
    const skinValue = skin || 'default';
    return (
      <li className={this._isDropDown(item)}>
        <Link to={item.link}>
          {item.name}
        </Link>
        { this._getDropDownChildren(item) }
      </li>
    );
  }

  _isDropDown(item) {
    if ( item.children && !!item.children.length ) {
      return 'dropdown';
    }
    return null;
  }

  _getDropDownChildren(item) {
    if (this._isDropDown(item)) {
      return (
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      )
    }
    return null;
  }

}

export default NavItem
