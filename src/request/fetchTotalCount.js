import * as R from 'ramda';
import getStarredTotalCount from './getStarredTotalCount';
import request from './request';

const fetchTotalCount = (username) => () => {
  const extractCount = R.compose(
    getStarredTotalCount,
    R.path(['headers', 'link'])
  );
  return request.get(`/users/${username}/starred?per_page=1`).then(extractCount);
};

export default fetchTotalCount;
