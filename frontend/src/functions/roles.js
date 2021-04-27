import { get } from './request'

const getAllRoles = async (token) => {
  return await get('/role', token)
}

export {
  getAllRoles
}