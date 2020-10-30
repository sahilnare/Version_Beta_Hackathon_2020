import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      error: false
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username.length === 0) {
      this.setState({error: true});
    }
    else {
      this.setState({error: false});
      this.props.login({username: this.state.username});
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
           width="100%"
           type="text"
           onChange={this.handleChange}
           name="username"
           value={this.state.username}
           id="username"
           placeholder='Username'
         />
         <button onClick={this.handleSubmit}>Submit</button>

      </React.Fragment>
    )
  }
}

export default Login;
