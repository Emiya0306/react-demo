// 依赖载入
import React, {Component, PropTypes} from 'react';

// 组件载入
import NavigationBar from '../../components/navigationBar/bootstrap-default-header-bar/bootstrap-default-header-bar.jsx'

// 主页面组件 Class App
class App extends Component {
  static propTypes = {
  };

  // 页面渲染
  render() {

    // 样式载入
    const styles = require('./app.scss');

    // 导航条logo信息
    const logo = { name:"Home", description:"", link:"/" };

    //导航条Home Link下的子菜单
    const homeChildrenMenus = [
      { name:"About", description:"", link:"/about" },
      { name:"About", description:"", link:"/about" },
      { name:"About", description:"", link:"/about" }
    ];

    // 导航条左侧菜单按钮
    const leftMenus = [
      { name:"Home", description:"", link:"/", children: homeChildrenMenus },
      { name:"About", description:"", link:"/about", children: homeChildrenMenus },
      { name:"About", description:"", link:"/about" }
    ];

    // 导航条右侧菜单按钮
    const rightMenus = [
      { name:"Register", description:"", link:"/register" },
      { name:"Login", description:"", link:"/login" }
    ];

    // 页面App渲染
    return (
      <div>
        {/* 导航条 */}
        <NavigationBar skin="bilibili" logo={logo} leftMenus={leftMenus} rightMenus={rightMenus} />
        <div>
          {/* 导航条以下页面 */}
          { this.props.children }
        </div>
      </div>
    );
  }
}

// 输出App组件
export default App;
