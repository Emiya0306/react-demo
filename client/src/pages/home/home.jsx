import React, {Component, PropTypes} from 'react';
import Spinner from '../../components/spinner/spinner.jsx';

export default class Home extends Component {
  static propTypes = {
  };

  // 组件被创建时,触发构造器
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  // 当组件即将被挂载 Note:发生在render之前
  componentWillMount() {
  }

  // 当组件即将被挂载 Note:发生在render之后
  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const styles = require('./home.scss');
console.log(this.state.isLoading)
    return (
      <div>
        Home
        <Spinner show={this.state.isLoading}/>
      </div>
    );
  }
}
