import React from 'react';
import * as R from 'ramda';

const RepoList = ({ language, repos }) => (
  <section>
    <h2>{language}</h2>
    <ul>
      {R.map(
        ({ name, url }) => (
          <li key={url}>{name}</li>
        ),
        R.sort(R.descend(R.prop('starCount')), repos)
      )}
    </ul>
  </section>
);

export default RepoList;
