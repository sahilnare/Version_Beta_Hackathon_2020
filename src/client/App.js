import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      isAuthenticated: false,
      username: null
    }
  }

  componentDidMount() {
    fetch('/api/getMessage')
      .then(res => res.json())
      .then(res => this.setState({ message: res.message }));
  }

  login = (cred) => {
    this.setState({username: cred.username, isAuthenticated: true});
  }

  render() {
    const { message, isAuthenticated, username } = this.state;
    console.log(username);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => !isAuthenticated ? <Home message={message} {...props} /> : <Redirect to='/dashboard' />}
          />
          <Route
            path='/dashboard'
            exact={true}
            render={(props) => isAuthenticated ? <Dashboard {...props} /> : <Redirect to='/login' />}
          />
          <Route
            path='/login'
            exact={true}
            render={(props) => !isAuthenticated ? <Login login={this.login} {...props} /> : <Redirect to='/dashboard' />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
