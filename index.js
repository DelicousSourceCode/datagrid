const cli = require('commander')
const chalk = require('chalk')
const repl = require('./utils/repl')

cli.version('1.0.0').description('CLI For Datagrid storage')
cli.command('init').action(() => {
  console.log(chalk.blue(`
    ~ Datagrid.js REPL ~
    Install: ${chalk.bgRedBright.black(' npm i datagrid-js ')}
    Docs: ${chalk.underline.blueBright('delicioussourcecode.github.io/datagrid-js/docs')}
  `))
  repl()
}).parse()