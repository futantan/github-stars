import React from 'react';
import style from './RepoItem.module.css';

export default ({ url, name }) => (
  <li className={style.repo}>
    <a
      className={style.link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  </li>
);
