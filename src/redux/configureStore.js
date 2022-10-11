import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducer';
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export { persistor, store };