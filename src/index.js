import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';



const Root= ()=>(
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/login" component={Login}></Route>
    </Switch>
  </Router>
)

ReactDOM.render(<Root/>,document.getElementById('root'));

