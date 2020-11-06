import {
  INIT_TOKEN
} from './constans'

export const initToken = (token) => ({
  type: INIT_TOKEN,
  token
})