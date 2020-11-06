import axios from 'axios'

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 5000
    })

    instance.interceptors.request.use(data => {
      return data
    }, err => {
    })

    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}