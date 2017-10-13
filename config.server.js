// Config file to store settings and provide the apps with env vars

if (process.env.NODE_ENV === 'production') {
  exports.NODE_ENV = 'production'
  exports.API_URL = 'NYI'
  exports.BUILD_PATH = 'build'
} else {
  exports.NODE_ENV = 'development'
  exports.API_URL = '//localhost:4200'
}

exports.PORT = 4200

