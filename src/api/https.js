import axios from 'axios'
import {API_TIME, API_URL} from '@/config.js'

axios.defaults.timeout = API_TIME;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * 封装post请求
 * Encapsulation post method
 * @param url
 * @param params
 * @returns {Promise}
 */
export function post(url, params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
