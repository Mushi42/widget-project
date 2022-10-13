import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,

} from './users.actions';

const initialState = {
  data: [],
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
    case LOAD_USERS_ERROR: {
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
