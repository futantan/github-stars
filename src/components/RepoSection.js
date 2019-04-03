import React from 'react';
import * as R from 'ramda';
import LanguageSectionTitle from './LanguageSectionTitle.js';
import RepoItem from './RepoItem.js';
import style from './RepoSection.module.css';
import color from '../color/color.json';

export default ({ language, repos }) => {
  const languageColor = R.pathOr('#C1C1C1', [language, 'color'], color);
  return (
    <div style={{ background: languageColor }} className={style.container}>
      <section className={style.main}>
        <LanguageSectionTitle language={language} />
        <ul className={style.repoContainer}>
          {R.map(
            ({ name, url }) => (
              <RepoItem key={url} url={url} name={name} />
            ),
            R.sort(R.descend(R.prop('starCount')), repos)
          )}
        </ul>
      </section>
    </div>
  );
};
