import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { About, Home, NotFound, Index } from './pages/index.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'));
