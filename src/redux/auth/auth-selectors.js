const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsRefreshingCurrentUser = (state) => state.auth.isRefreshing;

const getToken = (state) => state.auth.token;
const getisLoading = (state) => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingCurrentUser,

  getToken,
  getisLoading,
};

export default authSelectors;
