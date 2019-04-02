import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authWithGitHub } from './auth/authWithGitHub';
import { getTokenFromLocal, setTokenToLocal } from './storage/storage';
import fetchTotalCount from './request/fetchTotalCount';
import fetchAllStarredRepos from './request/fetchAllStarredRepos';
import { setTokenToRequestHeader } from './request/request';

class App extends Component {
  componentDidMount() {
    authWithGitHub()
      .then(setTokenToLocal)
      .then(getTokenFromLocal)
      .then(setTokenToRequestHeader)
      .then(fetchTotalCount)
      .then(fetchAllStarredRepos)
      .then((v) => console.log(JSON.stringify(v)));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
