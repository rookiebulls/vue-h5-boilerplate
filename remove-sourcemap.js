const fs = require('fs')
const path = require('path')

const dist = path.resolve(__dirname, 'dist')

function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file)

    if (fs.statSync(pathname).isDirectory()) {
      travel(pathname, callback)
    } else {
      if (path.extname(pathname) === '.map') {
        console.log('remove source map', pathname)
        callback(pathname)
      }
    }
  })
}

travel(dist, fs.unlinkSync)
