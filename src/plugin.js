import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'http://11f2b3a4f79b49219e867513d646a1fc@10.39.228.84:9000/2',
    release: 'release-v' + __VERSION__,
    environment: __DEPLOY_SERVER__,
    integrations: [new VueIntegration({ Vue, attachProps: true })]
  })
}
