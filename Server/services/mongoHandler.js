const mongoose = require('mongoose');

let testsDb
let usersDb
let recordsDb
const initConnection = async () => {
    const { domain, db_port, database_data_name ,database_records_name,database_users_name} = process.env;
        try { 
            testsDb = mongoose.createConnection(`mongodb://${domain}:${db_port}/${database_data_name}`)
            usersDb = mongoose.createConnection(`mongodb://${domain}:${db_port}/${database_users_name}`)
            recordsDb = mongoose.createConnection(`mongodb://${domain}:${db_port}/${database_records_name}`)
        } catch (err) {  }
} 
initConnection();
module.exports = { initConnection, testsDb, recordsDb , usersDb };