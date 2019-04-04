import axios from 'axios';
import request from './request';
import * as R from 'ramda';

const MAX_COUNT_PER_PAGE = 100;

const fetchSinglePageData = username => page => {
  const extractFields = R.compose(
    R.map(({ html_url, name, language, stargazers_count }) => ({
      name,
      url: html_url,
      language,
      starCount: stargazers_count
    })),
    R.prop('data')
  );
  return request
    .get(
      `/users/${username}/starred?per_page=${MAX_COUNT_PER_PAGE}&page=${page}`
    )
    .then(extractFields);
};

const fetchAllStarredRepos = username => total =>
  // prettier-ignore
  axios.all(R.map(
    fetchSinglePageData(username),
    R.range(1, Math.ceil(total / MAX_COUNT_PER_PAGE) + 1)
  )).then(R.unnest);

export default fetchAllStarredRepos;
