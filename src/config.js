const configs = {
  pro: {
    host: 'https://mairhome.vankeservice.com/mobile'
  },
  test: {
    host: 'https://mairhometest.vankeservice.com/mobile'
  },
  dev: {
    host: 'https://mairhomedev.vankeservice.com/mobile'
  }
}

const path = '/user/'
const baseURL =
  process.env.NODE_ENV === 'production' ? configs[__DEPLOY_SERVER__].host + path : path

export default baseURL
