const { createConnection } = require('mongoose');
const { logger } = require('../app-logger')
let testsDb ,usersDb, recordsDb

// const initConnection = async () => {
//     const { domain, db_port, database_data_name, database_records_name, database_users_name } = process.env;
//     (async()=>{try {
//         logger.log('info', 'attempts to establish connection to the db server. at mongoHandler 13')
//         testsDb = await createConnection(`mongodb://${domain}:${db_port}/${database_data_name}`)
//         logger.log('info', 'established connection to the db server. at mongoHandler 17')
//     } catch (err) { logger.error(`failed to connect to the db server.\noriginal error : ${err.message} at: mongoHandler 19`) }})()
//     (async()=>{try {
//         logger.log('info', 'established connection to the db server. at mongoHandler 17')
//         usersDb = await createConnection(`mongodb://${domain}:${db_port}/${database_users_name}`)
//         logger.log('info', 'attempts to establish connection to the db server. at mongoHandler 13')
//     } catch {logger.error(`failed to connect to the db server.\noriginal error : ${err.message} at: mongoHandler 19`)  }})()


// }
// module.exports = { initConnection, testsDb, recordsDb, usersDb };