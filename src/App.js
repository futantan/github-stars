import React from 'react';
import './App.css';
import RepoSction from './components/RepoSection.js';
import mock from './mock';
import * as R from 'ramda';

const data = R.groupBy(R.prop('language'))(mock);
console.log(data);

const App = () =>
  R.map(
    ([language, repos]) => (
      <RepoSction key={language} language={language} repos={repos} />
    ),
    R.toPairs(data)
  );

export default App;
