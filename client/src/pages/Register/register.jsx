import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class Register extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./register.scss');

    return (
      <div>
        Register
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Register;
