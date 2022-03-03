const winston = require('winston');
const logger = winston.createLogger({
    level:'error',
    defaultMeta:{service: 'Server' },
    format:winston.format.json(),
    transports:[
        new winston.transport.File({filename:'error.log'})
    ]
})
