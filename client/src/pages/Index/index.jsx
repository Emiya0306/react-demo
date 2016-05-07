import React, {Component, PropTypes} from 'react';

export default class Index extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  render() {
    const {user, logout} = this.props;

    return (
      <div>
        index
      </div>
    );
  }
}
