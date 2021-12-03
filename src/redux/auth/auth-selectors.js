const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsRefreshingCurrentUser = (state) =>
  state.auth.isRefreshingCurrentUser;
const getError = (state) => console.log(state.auth.error);

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingCurrentUser,
  getError,
};

export default authSelectors;
