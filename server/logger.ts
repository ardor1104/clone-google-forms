const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('----------------------------------------');

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host) => {
    console.log(` ${chalk.bold('Server started')}
${divider}\n
    Local:            ${chalk.cyanBright(`http://${host}:${port}`)}
    On your network:  ${chalk.cyanBright(`http://${ip.address()}:${port}`)}
\n${divider}
  ${chalk.green(`Press ${chalk.italic('Ctrl+C (^C)')} to stop`)}\n`);
  },
};

module.exports = logger;
