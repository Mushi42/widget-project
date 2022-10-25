import { SET_LAYOUT_THEME, SET_ADVERTISEMENT_POSITION } from "./layout.types";

const initialState = {
  theme: "light",
  adevertisementPosition: "",
};

export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LAYOUT_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case SET_ADVERTISEMENT_POSITION: {
      return {
        ...state,
        adevertisementPosition: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
