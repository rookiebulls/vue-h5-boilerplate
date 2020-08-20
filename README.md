## A boilerplate for mobile web development

### Features

- babel es6 transform
- eslint for js and vue files
- stylnt for css, scss and vue files
- prettier for js, css, scss and vue files
- sass preprocessor support
- postcss for css autoprefix
- docker deployment support
- online error tracking support by sentry
- chunk split, lazy loading and minimize
- githooks support by husky
- git commit template
- git commit message linter


### Commands

- `npm run build:pro` for production environment
- `npm run build:test` for test environment
- `npm run build:dev` for development environment

make sure to change your configuration in `config.js`
```js
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
```

### Build docker image

make sure you have docker install first

- `npm run build-img:pro` to build production image
- `npm run build-img:test` to build test image


### Nginx conf

delete `default.conf` from Dockerfile if you don't need a reverse proxy

### Sentry setup

change all those settings to your real sentry settings in `.sentryclirc` and `plugin.js`

