import {DATA_WELCOME} from '../types'

const initialState = {
  dataWelcome: null
}

function reducerWelcomeData(state = initialState, action) {
  switch (action.type) {
    case DATA_WELCOME:
      return {...state, dataWelcome: action.payload}
    default:
      return state;
  }
}

export {reducerWelcomeData};
