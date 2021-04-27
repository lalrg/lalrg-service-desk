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

const getById= async (token,id) => {
  return await get(`/ticket/${id}`, token)
}

const getClosedTickets = async (token) => {
  return await get(`/ticket/closed`, token)
}

const openTicket = async (token, id) => {
  return await get(`/ticket/open/${id}`, token)
}

const progressTicket = async (token, id) => {
  return await get(`/ticket/progress/${id}`, token)
}

const closeTicket = async (token, id) => {
  return await get(`/ticket/close/${id}`, token)
}

export {
  postNewTicket,
  getAllTickets,
  getMyTickets,
  getClosedTickets,
  getById,
  openTicket,
  progressTicket,
  closeTicket
}