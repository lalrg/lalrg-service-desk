import { get, post } from './request'

const getAllUsers = async (token) => {
  return await get('/user', token)
}

const getById = async (token, id) => {
  return await get(`/user/${id}`, token)
}

const addUserRequest = async (token, data) => {
  return await post('/user/create', token, data)
}

const updateUserRequest = async (token, data) => {
  return await post('/user/update', token, data)
}

export {
  getAllUsers,
  addUserRequest,
  getById,
  updateUserRequest
}