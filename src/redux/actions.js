
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (name) => ({
  type: LOGIN,
  payload: name,
});

export const logout = () => ({
  type: LOGOUT,
});
