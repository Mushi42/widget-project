import { SET_USER_TEXT, SET_USER_NAME } from "./users.types";

export const setUserName = (greeting) => {
  return {
    type: SET_USER_NAME,
    payload: greeting,
  };
};

export const setUserTEXT = (name) => {
  return {
    type: SET_USER_TEXT,
    payload: name,
  };
};
