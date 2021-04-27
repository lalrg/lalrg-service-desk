import { post, get } from './request'

const postNewTicket = async (token, data) => {
  return await post('/ticket', token, data)
}

const getAllTickets = async (token) => {
  return await get('/ticket', token)
}

const getMyTickets = async (token) => {
  return await get(`/ticket/user`, token)
}

export {
  postNewTicket,
  getAllTickets,
  getMyTickets
}