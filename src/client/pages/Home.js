import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {

  }

  render() {
    const {message} = this.props;
    return (
      <div>
        <h1>Pied Piper</h1>
        {message ? <h1>{`Message received: ${message}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Link to='/login'>Login Page</Link>
      </div>
    )
  }
}

export default Home
