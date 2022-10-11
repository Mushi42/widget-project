import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  OTP_MAIL_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_SESSION_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './users.actions';

const initialState = {
  data: [],
  loginData: {
    email: "",
    optEmailId: ""
  },
  user: undefined,
  user_session: "",
  loading: false,
  error: '',
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case OTP_MAIL_SUCCESS: {
      return {
        ...state,
        loginData: action.data,
        loading: false,
      };
    }
    case USER_SESSION_SUCCESS: {
      return {
        ...state,
        user_session: action.data,
        loading: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.data,
        loading: false,
      };
    }
    case LOAD_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.data,
        loading: false,
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
