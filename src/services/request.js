import axios from 'axios'

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 5000
    })

    instance.interceptors.request.use(config => {
      if (window.sessionStorage.getItem('token')) {
        config.headers.Authorization = window.sessionStorage.getItem('token')
      }
      return config
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