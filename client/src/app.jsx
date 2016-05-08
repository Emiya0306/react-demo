import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { App, About, Home, Register, Login, NotFound } from './pages/index.jsx'

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

    {/* Error页面 */}
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'));
