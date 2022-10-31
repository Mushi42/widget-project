import { SET_LAYOUT_THEME, SET_ADVERTISEMENT_POSITION, SIDE_BAR_PINED_LIST } from "./layout.types";

export const setTheme = (theme) => {
  return {
    type: SET_LAYOUT_THEME,
    payload: theme,
  };
};

export const setAdvertisementPosition = (position) => {
  return {
    type: SET_ADVERTISEMENT_POSITION,
    payload: position,
  };
};

export const setSideBarPinnedList = (menuName) => {
  return {
    type: SIDE_BAR_PINED_LIST,
    payload: menuName,
  };
};
