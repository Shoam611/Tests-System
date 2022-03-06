const winston = require('winston');

let logger;
function createLogger (){
    logger = winston.createLogger({
        level:'info',
        format:winston.format.json(),
        defaultMeta:{service: 'Server' },
        transports:[
            new winston.transports.File({filename:'logs/error.log' , level:'error'}) , 
            new winston.transports.File({filename:'logs/warning.log' , level:' warn'}) , 
            new winston.transports.File({filename:'logs/info.log' , level:'info'}) , 
        ]
    })
    return logger ;
}createLogger();


module.exports = {logger, createLogger}