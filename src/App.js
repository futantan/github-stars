import React from 'react';
import './App.css';
import RepoSction from './components/RepoSection.js';
import * as R from 'ramda';
import transformResponse from './utils/transformResponse';
import mock from './mock.js'

const App = () =>
  R.map(
    ([language, repos]) => (
      <RepoSction
        key={language}
        language={language === 'null' ? 'Document' : language}
        repos={repos}
      />
    ),
    transformResponse(mock),
  );

export default App;
