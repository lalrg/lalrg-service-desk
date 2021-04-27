import axios from 'axios';
import { BASE_URL } from './constants'

const get = async (urlWithSlash, authToken) => {
  return await axios.get(`${BASE_URL}${urlWithSlash}`, { headers:{ Authorization: `Bearer ${authToken}` } })
}

const post = async (urlWithSlash, authToken, data) => {
  return await axios.post(`${BASE_URL}${urlWithSlash}`,data , { headers:{ Authorization: `Bearer ${authToken}` } })
}

const deleteR = async (urlWithSlash, authToken, data) => {
  return await axios.delete(`${BASE_URL}${urlWithSlash}`,data , { headers:{ Authorization: `Bearer ${authToken}` } })
}

export {
  get,
  post, 
  deleteR
}