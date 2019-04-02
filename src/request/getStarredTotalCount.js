import * as R from 'ramda';
import { parse } from 'querystring';

const getLastPaginationAPIUrlFromLink = R.compose(
  R.last,
  R.match(/<(.*)>/),
  R.last,
  R.split(',')
);

const getPageFromUrl = R.compose(
  parseInt,
  R.prop('page'),
  parse,
  R.last,
  R.split('?')
);

const getStarredTotalCount = R.compose(
  getPageFromUrl,
  getLastPaginationAPIUrlFromLink
);

export default getStarredTotalCount;
