import axios from "axios";
import * as R from "ramda";

const MAX_COUNT_PER_PAGE = 100;

const fetchSinglePageData = page => {
  const extractNameUrlAndLanguage = R.compose(
    R.map(R.pick(["html_url", "name", "language", "stargazers_count"])),
    R.prop("data")
  );
  return axios
    .get(
      `https://api.github.com/users/futantan/starred?per_page=${MAX_COUNT_PER_PAGE}&page=${page}`
    )
    .then(extractNameUrlAndLanguage);
};

const fetchAllStarredRepos = total => {
  return axios
    .all(
      R.map(
        fetchSinglePageData,
        R.range(1, Math.ceil(total / MAX_COUNT_PER_PAGE) + 1)
      )
    )
    .then(R.unnest)
};

export default fetchAllStarredRepos;
