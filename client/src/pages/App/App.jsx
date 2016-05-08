import React, {Component, PropTypes} from 'react';
import NavigationBar from '../../components/navgationBar/bootstrap-default-header-bar/bootstrap-default-header-bar.jsx'

export default class Home extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./app.scss');

    const logo = { name:"Home", description:"", link:"/" };

    const leftMenus = [
      { name:"Home", description:"", link:"/" },
      { name:"About", description:"", link:"/about" }
    ];

    const rightMenus = [
      { name:"Register", description:"", link:"/register" },
      { name:"Login", description:"", link:"/login" }
    ];

    return (
      <div>
        <NavigationBar skin="bilibili" logo={logo} leftMenus={leftMenus} rightMenus={rightMenus} />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
