import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.100.3:2500',
})

export default api
