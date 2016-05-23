// 依赖载入
import React, {Component, PropTypes} from 'react';
import common from '../../mixins/common.jsx';

// 组件载入
import NavigationBar from '../../components/navigationBar/bootstrap-default-header-bar/bootstrap-default-header-bar.jsx'

//console.log(common);

// 主页面组件 Class App
@common
class App extends Component {
  static propTypes = {};

  // 组件被创建时,触发构造器
  constructor(props) {
    super(props);
    this.state = {scrolling: 0};
  }

  // 当组件即将被挂载 Note:发生在render之前
  componentWillMount() {
  }

  // 当组件即将被挂载 Note:发生在render之后
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  // 页面渲染
  render() {

    // 样式载入
    const styles = require('./app.scss');

    // 导航条logo信息
    const logo = {name: "Home", description: "", link: "/"};

    //导航条Home Link下的子菜单
    const homeChildrenMenus = [
      {name: "About", description: "", link: "/about"},
      {name: "About", description: "", link: "/about"},
      {name: "About", description: "", link: "/about"}
    ];

    // 导航条左侧菜单按钮
    const leftMenus = [
      {name: "Home", description: "", link: "/", children: homeChildrenMenus},
      {name: "About", description: "", link: "/about", children: homeChildrenMenus},
      {name: "About", description: "", link: "/about"}
    ];

    // 导航条右侧菜单按钮
    const rightMenus = [
      {name: "Register", description: "", link: "/register"},
      {name: "Login", description: "", link: "/login"}
    ];

    // 页面App渲染
    return (
      <div className="App__container">

        {/* 导航条 */}
        <NavigationBar skin="bilibili" logo={logo} leftMenus={leftMenus} rightMenus={rightMenus}
                       scrolling={this.state.scrolling}/>

        {/* 导航条以下页面 */}
        { this.props.children }

      </div>
    );
  }
}

// 输出App组件
export default App;
