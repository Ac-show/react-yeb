import { combineReducers } from 'redux'

import {
  INIT_TOKEN,
  // INIT_VERTICAL_MENU
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

// 保存垂直菜单栏的refs
// const initVerticalMenus = {
//   refs: []
// }
// const initVerticalMenusReducer = (state = initVerticalMenus, action) => {
//   switch(action.type) {
//     case INIT_VERTICAL_MENU:
//       return {...state, refs: [...state.refs].push(action.ref)}
//     default: 
//       return state
//   }
// }


const reducer = combineReducers({
  initDateReducer,
  // initVerticalMenusReducer
})

export default reducer