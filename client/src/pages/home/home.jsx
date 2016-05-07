import React, {Component, PropTypes} from 'react';

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  render() {
    const {user, logout} = this.props;
    const styles = require('./home.scss');

    return (
      <div>
        Home
      </div>
    );
  }
}
