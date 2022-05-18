// @ts-check
const chalk = require('chalk')
const { stdin, stdout } = require('process')
const rl = require('readline')
const interface = rl.createInterface(stdin, stdout)
const createDb = require('./saver')

function repl() {
  interface.question(`${chalk.greenBright('datagrid > ')}`, res => {
    if (res.startsWith('create db "') && res.endsWith('"')) {
      console.log(chalk.yellowBright(`Created database ${res.split(' ')[2]}`))
      repl()
    } else if (res == 'exit') {
      console.log(chalk.yellowBright('Exiting REPL Session'))
      interface.close()
    } else {
      console.log(chalk.redBright(`Error: invalid argument "${res.replace(/"/, '')}"`))
      repl()
    }
  })
}

module.exports = repl