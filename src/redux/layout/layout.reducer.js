import { SET_LAYOUT_THEME, SET_ADVERTISEMENT_POSITION, SIDE_BAR_PINED_LIST } from "./layout.types";

const initialState = {
  theme: "light",
  adevertisementPosition: "",
  sideBarPinnedList: [],
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
    case SIDE_BAR_PINED_LIST: {
      console.log("hello", action.payload);
      return {
        ...state,
        sideBarPinnedList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
