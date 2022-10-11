import UsersAPI from '../../apis/users';
import { userAction } from '../actions';
import { notifyError } from '../../components/Toast';

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const USER_LOGIN_SUCCESS = 'REDUX_THUNK_LOGIN_SUCCESS';
export const USER_SESSION_SUCCESS = 'REDUX_THUNK_USER_SESSION_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';
export const UPDATE_USER_ERROR = 'REDUX_THUNK_UPDATE_USER_ERROR';
export const UPDATE_USER_SUCCESS = 'REDUX_THUNK_UPDATE_USER_SUCCESS';

export const getLoginUser = () => (dispatch) => {
  dispatch({ type: LOAD_USERS_LOADING });
  UsersAPI.getLoginUser()
    .then((response) => {
      const { data } = response;
      const user = data.data;

    })
    .catch((error) => {
      dispatch({
        type: LOAD_USERS_ERROR,
        error: error.message || 'Unexpected Error!!!',
      });
    });
};

export const removeUser = () => (dispatch) => {
  dispatch({ type: USER_LOGIN_SUCCESS, data: undefined, });
  dispatch({ type: USER_SESSION_SUCCESS, data: "" });
  const payload = { email: "", optEmailId: "" };
  dispatch({ type: OTP_MAIL_SUCCESS, data: payload });
  notifyError('Your session expired! Please login');
};
