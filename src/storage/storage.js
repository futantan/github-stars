const TOKEN_KEY = 'github-token';

export const isLoggedIn = () => !!window.localStorage.getItem(TOKEN_KEY);
export const setTokenToLocal = ({ token }) =>
  window.localStorage.setItem(TOKEN_KEY, token);
export const removeTokenFromLocal = () => window.localStorage.removeItem(TOKEN_KEY);
export const getTokenFromLocal = () => window.localStorage.getItem(TOKEN_KEY);
