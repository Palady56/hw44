import { LOGIN, LOGOUT } from './actions';

const initialState = {
  name: '',
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        name: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
