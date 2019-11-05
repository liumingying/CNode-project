import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    HashRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
import './index.css';
import Login from './container/Login';
// import Post from '../post';


ReactDOM.render((
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App}/>
      <Route exact path="/api" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route exact path="/start" component={App}></Route>
      <Route exact path="/login" component={Login} />

    </Switch>
  </Router>
),
document.getElementById('root'));
