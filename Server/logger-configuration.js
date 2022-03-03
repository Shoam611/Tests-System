const winston = require('winston');

let logger;
function createLogger (){
    logger = winston.createLogger({
        level:'error',
        defaultMeta:{service: 'Server' },
        format:winston.format.json(),
        transports:[
            new winston.transports.File({filename:'logs/error.log'}) ]
    })
}
function testLogger(){
logger.log('error','some error massage',{ additional: 'properties',
are: 'passed along'})
logger.error(new Error('Error as info'));
}

module.exports = {logger, createLogger,testLogger}