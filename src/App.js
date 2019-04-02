import React from 'react';
import './App.css';
import RepoList from './components/RepoList';
import mock from './mock';
import * as R from 'ramda';

const data = R.groupBy(R.prop('language'))(mock);
console.log(data);

const App = () =>
  R.map(
    ([language, repos]) => (
      <RepoList key={language} language={language} repos={repos} />
    ),
    R.toPairs(data)
  );

export default App;
