import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

