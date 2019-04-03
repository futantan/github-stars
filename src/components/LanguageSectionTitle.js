import React from 'react';
import style from './LanguageSectionTitle.module.css';

export default ({ language }) => (
  <a className={style.languageName} href={`#${language}`} id={language}>
    {language}
  </a>
);
