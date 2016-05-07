import React, {Component, PropTypes} from 'react';

export default class About extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  render() {
    const {user, logout} = this.props;
    const styles = require('./about.scss');

    return (
      <div>
        About
      </div>
    );
  }
}
