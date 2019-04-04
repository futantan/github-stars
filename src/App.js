import React, { useEffect, useState } from 'react';
import './App.css';
import RepoSction from './components/RepoSection.js';
import * as R from 'ramda';
import transformResponse from './utils/transformResponse';
import { isLoggedIn } from './storage/storage.js';
import { authWithGitHub } from './auth/authWithGitHub';
import {
  getTokenFromLocal,
  setTokenToLocal,
  removeTokenFromLocal
} from './storage/storage';
import fetchTotalCount from './request/fetchTotalCount';
import fetchAllStarredRepos from './request/fetchAllStarredRepos';
import { setTokenToRequestHeader } from './request/request';

const APP_STATUS = { Loading: 'Loading', Failed: 'Failed', Succeed: 'Succeed' };

const App = () => {
  const [response, updateResponse] = useState([]);
  const [appStatus, updateAppStatus] = useState(APP_STATUS.Loading);
  const markAppStatusFailed = () => updateAppStatus(APP_STATUS.Failed);
  const markAppStatusSucceed = () => updateAppStatus(APP_STATUS.Succeed);
  // prettier-ignore
  const handleAppFailed = R.compose(removeTokenFromLocal, markAppStatusFailed);

  useEffect(() => {
    if (isLoggedIn()) {
      Promise.resolve()

        .then(getTokenFromLocal)
        .then(setTokenToRequestHeader)
        .then(fetchTotalCount)
        .then(fetchAllStarredRepos)
        .then(updateResponse)
        .then(markAppStatusSucceed)
        .catch(handleAppFailed);
    } else {
      authWithGitHub()
        .then(setTokenToLocal)

        .then(getTokenFromLocal)
        .then(setTokenToRequestHeader)
        .then(fetchTotalCount)
        .then(fetchAllStarredRepos)
        .then(updateResponse)
        .then(markAppStatusSucceed);
    }
  }, []);

  switch (appStatus) {
    case APP_STATUS.Loading:
      return 'loading';
    case APP_STATUS.Failed:
      return 'failed';
    default:
      return R.map(
        ([language, repos]) => (
          <RepoSction
            key={language}
            language={language === 'null' ? 'Document' : language}
            repos={repos}
          />
        ),
        transformResponse(response)
      );
  }
};

export default App;
