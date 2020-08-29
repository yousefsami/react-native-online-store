/**
 * Action types
 */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

/**
 * Actions
 */
export const login = (
  id = '-1',
  username = '',
  fullname = '',
  email = '',
  token = ''
) => ({
  type: LOGIN,
  id,
  username,
  fullname,
  email,
  token
});

export const logout = () => ({
  type: LOGOUT
});

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: {
          id: action.id,
          username: action.username,
          fullname: action.fullname,
          email: action.email,
          token: action.token
        }
      });
    case LOGOUT:
      return Object.assign({}, state, { user: undefined });
    default:
      return state;
  }
}
