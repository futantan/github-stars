import getStarredTotalCount from '../getStarredTotalCount';

describe('getStarredTotalCount', () => {
  it('should get total count from link header', () => {
    const link =
      '<https://api.github.com/user/6268441/starred?per_page=1&page=2>; rel="next", <https://api.github.com/user/6268441/starred?per_page=1&page=335>; rel="last"';
    expect(getStarredTotalCount(link)).toBe(335);
  });
});
