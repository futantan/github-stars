import * as R from "ramda";
import { parse } from "querystring";

const getStarredTotalCount = R.compose(
  parseInt,
  R.prop("page"),
  parse,
  R.last,
  R.split("?"),
  R.last,
  R.match(/<(.*)>/),
  R.last,
  R.split(",")
);

export default getStarredTotalCount;
