import { get } from './request'

const getServices = async (authToken) => {
  const response = await get('/service', authToken)
  if(response)
    return response.data
  return false
}

export {
  getServices
}