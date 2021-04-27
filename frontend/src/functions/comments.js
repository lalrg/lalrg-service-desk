import { post } from './request'

const addComment = async (token, data) => {
  return await post('/comment', token, data)
}

export {
  addComment
}
