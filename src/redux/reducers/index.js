import {combineReducers} from 'redux'
import {reducerForBoardData} from './reducerForBoardData'
import {reducerWelcomeData} from './reducerWelcomeData'

export default combineReducers({welcome: reducerWelcomeData, app: reducerForBoardData})

