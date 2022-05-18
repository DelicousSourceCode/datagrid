const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

function createDb(folder) {
  fs.open(path.join(__dirname, '../', folder), 'a', 666, (e, fd) => {
    fs.write(fd, )
  })
}

module.exports = createDb