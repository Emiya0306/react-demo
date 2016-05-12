// 依赖载入
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

// 页面载入
import { App, About, Home, Register, Login, NotFound } from './pages/index.jsx';

// 全局挂载jquery
window.$ = window.jQuery = require("jquery");

// 主页面路由渲染
ReactDOM.render((
  <Router history={browserHistory}>

    {/* App主页面 */}
    <Route path="/" component={App}>

      {/* 默认主页 */}
      <IndexRoute component={Home}/>
      {/* 其他主页 */}
      <Route path="/about" component={About}/>

    </Route>

    {/* Auth页面 */}
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />

    {/* Error页面 */}
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'));
