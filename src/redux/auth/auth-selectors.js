export const isUserLogin = ({ auth }) => auth.isLogin;

export const getUser = ({ auth }) => auth.user;

export const getToken = ({ auth }) => auth.token;

export const checkError = ({ auth }) => auth.error;

export const isLoading = ({ auth }) => auth.isLoading;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectisRefreshing = state => state.auth.isRefreshing;

export const selectIsLogin = state => state.auth.isLogin;
