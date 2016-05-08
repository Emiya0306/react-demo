import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'

export default class NotFound extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  render() {
    const {user, logout} = this.props;
    const styles = require('./notFound.scss');

    return (
      <div>
        NotFound
        <Link to="/">home</Link>
      </div>
    );
  }
}
