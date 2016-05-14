import React, {Component, PropTypes} from 'react';
import Spinner from '../../components/spinner/spinner.jsx';

export default class Home extends Component {
  static propTypes = {
  };

  render() {
    const styles = require('./home.scss');

    return (
      <div>
        Home
        <Spinner />
      </div>
    );
  }
}
