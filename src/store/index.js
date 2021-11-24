import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { serviceListReducer } from '../reducers/serviceList';
import { addServiceReducer } from '../reducers/addService';
import { editServiceReducer } from '../reducers/editService';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  addService: addServiceReducer,
  editService: editServiceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
