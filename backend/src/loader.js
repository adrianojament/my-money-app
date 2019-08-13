/* "pm2": "^2.1.5" */

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)