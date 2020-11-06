import { request } from './request'

export function requestLogin(username, password, code) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username,
      password,
      code
    }
  })
}
