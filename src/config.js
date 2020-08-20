const configs = {
  pro: {
    origin: location.origin // change to your production environment origin
  },
  test: {
    origin: location.origin // change to your test environment origin
  },
  dev: {
    origin: location.origin // change to your development environment origin
  }
}

const prefixURI = '/api/'
const baseURL =
  process.env.NODE_ENV === 'production'
    ? configs[__DEPLOY_SERVER__].origin + prefixURI
    : prefixURI

export default baseURL
