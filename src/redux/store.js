import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

function logger({ getState }) {
 return next => action => {
   console.log('will dispatch', action)
   const returnValue = next(action)
   console.log('state after dispatch', getState())
   return returnValue
 }
}

const store = createStore(rootReducer, compose(applyMiddleware(thunk,logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export {store}