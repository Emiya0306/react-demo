import React, {Component, PropTypes} from 'react';
import NavigationBar from '../../components/navgationBar/bootstrap-default-header-bar/bootstrap-default-header-bar.jsx'

export default class Home extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./app.scss');

    const leftMenus = [
      { name:"Home", description:"", link:"/" },
      { name:"About", description:"", link:"/about" },
      { name:"Register", description:"", link:"/register" },
      { name:"Login", description:"", link:"/login" },
      { name:"NotFound", description:"", link:"/notFound" },
    ];

    return (
      <div>
        <NavigationBar leftMenus={leftMenus} />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
