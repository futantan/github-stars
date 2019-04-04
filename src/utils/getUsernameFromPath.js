import * as R from 'ramda';

export default () => R.replace(/\//g, '', window.location.pathname);
