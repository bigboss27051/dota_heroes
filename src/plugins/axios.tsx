import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.opendota.com/',
})
httpClient.interceptors.request.use(async (config) => {
  config.headers = {
    'Content-Type': 'application/json',
  }
  return config
})


export default httpClient