const chalk = require('chalk')
const { stdin, stdout } = require('process')
const rl = require('readline')
const interface = rl.createInterface(stdin, stdout)
const saveToDir = require('./save-dir')

function repl() {
  interface.question('datagrid > ', res => {
    switch (res) {
      case 'new':
    }
  })
}

module.exports = repl