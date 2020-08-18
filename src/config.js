const configs = {
  pro: {
    host: 'https://mairhome.vankeservice.com'
  },
  test: {
    host: 'https://mairhometest.vankeservice.com'
  },
  dev: {
    host: 'https://mairhomedev.vankeservice.com'
  }
}

const path = '/user/'
const baseURL =
  process.env.NODE_ENV === 'production' ? configs[__DEPLOY_SERVER__].host + path : path

export default baseURL
