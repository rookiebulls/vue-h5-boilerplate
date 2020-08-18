import http from 'src/http'

export const getBaseDict = params => http.get('/queryBaseDictWXTen', { params })
