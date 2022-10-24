import { SET_USER_NAME, SET_USER_TEXT } from "./users.types";

const initialState = {
  data: [],
  user: undefined,
  user_session: "",
  loading: false,
  error: "",
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case SET_USER_TEXT: {
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
