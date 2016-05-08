import React, {Component, PropTypes} from 'react';
import NavgationBar from '../../components/navgationBar/bootstrap-default-header-bar/bootstrap-default-header-bar.jsx'

export default class Home extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./home.scss');

    return (
      <div>
        Home
      </div>
    );
  }
}
