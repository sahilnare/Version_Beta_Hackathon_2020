import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    fetch('/api/getMessage')
      .then(res => res.json())
      .then(res => this.setState({ message: res.message }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Pied Piper</h1>
        {message ? <h1>{`Message received: ${message}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}
