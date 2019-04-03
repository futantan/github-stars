import * as R from 'ramda';

// prettier-ignore
const sortByRepoCount = R.sortBy(R.compose(R.negate, R.length, R.prop(1)));
const transformResponse = R.compose(
  sortByRepoCount,
  R.toPairs,
  R.groupBy(R.prop('language'))
);

export default transformResponse;
