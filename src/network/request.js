import axios from 'axios'
import url from '@/common/const'

export function request(config) {
  const instance =axios.create({
    baseURL: url,
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    return config
  },error => {
    console.log(error);
  })
  instance.interceptors.response.use(config => {
    return config.data
  },error => {
    console.log(error);
  })

  return instance(config)
}
