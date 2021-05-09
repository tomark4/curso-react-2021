import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { uiReducer } from '../reducers/uiReducer';
import { calendarReducer } from '../reducers/calendarReducer';

const rootReducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
