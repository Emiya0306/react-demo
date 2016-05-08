import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'

class Login extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./login.scss');

    return (
      <div>
        Login
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Login;
