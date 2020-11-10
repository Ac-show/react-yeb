import { combineReducers } from 'redux'

import {
  INIT_TOKEN,
  SAVE_STAFF_DATA,
  GET_STAFF_DATA
} from './constans'

// 保存token
const initDateState = {
  token: null
}
const initDateReducer = (state = initDateState, action) => {
  switch(action.type) {
    case INIT_TOKEN:
      return {...state, token: action.token}
    default:
      return state
  }
}

const initStaffData = {
  staffData: []
}
const staffDataReducer = (state = initStaffData, action) => {
  switch(action.type) {
    case SAVE_STAFF_DATA:
      return {...state, staffData: action.data}
    case GET_STAFF_DATA:
      getStaffData(action.currentPage, action.size)
      return state
    default:
      return state
  }
}

function getStaffData(currentPage, size) {
  console.log(0);
}


















const reducer = combineReducers({
  initDateReducer,
  staffDataReducer
})

export default reducer