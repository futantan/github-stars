import axios from "axios";
import * as R from "ramda";
import getStarredTotalCount from "./getStarredTotalCount";

const fetchTotalCount = () => {
  const extractCount = R.compose(
    getStarredTotalCount,
    R.path(["headers", "link"])
  );
  return axios
    .get("https://api.github.com/users/futantan/starred?per_page=1")
    .then(extractCount);
};

export default fetchTotalCount;
