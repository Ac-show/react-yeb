import {requestStaffInfo} from '@/services/home'

import {
  INIT_TOKEN,
  SAVE_STAFF_DATA,
  GET_STAFF_DATA
} from './constans'

export const initToken = token => ({
  type: INIT_TOKEN,
  token
})

export const saveStaffData = data => ({
  type: SAVE_STAFF_DATA,
  data
})

export const requestStaffDate = dispatch => {
  requestStaffInfo(1, 287).then(res => {
    const data = res.data
    dispatch(saveStaffData(data))
  })
}

export const getStaffData = (currentPage, size) => ({
  type: GET_STAFF_DATA,
  currentPage,
  size
})