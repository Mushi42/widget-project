import { combineReducers } from "redux";

import layoutReducer from "./layout/layout.reducer";

// import filtersReducer from './features/filters/filtersSlice';

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export default rootReducer;
