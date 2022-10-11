import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';

// import filtersReducer from './features/filters/filtersSlice';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
