import http from 'src/http'

export const getHotTopics = () => http.get('topics/hot.json')

export const getTopicContent = params => http.get('topics/show.json', { params })

export const getReplies = params => http.get('replies/show.json', { params })

export const getLatestTopics = () => http.get('topics/latest.json')

export const getAllNodes = () => http.get('nodes/all.json')
