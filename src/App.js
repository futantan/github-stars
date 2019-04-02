import React, { Component } from 'react';
import './App.css';
import RepoList from './components/RepoList';
import mock from './mock';
import * as R from 'ramda';

const data = R.groupBy(R.prop('language'))(mock);
console.log(data);

class App extends Component {
  render() {
    return <RepoList language="JavaScript" repos={data.JavaScript} />;
  }
}

export default App;
