const {createConnection} = require('mongoose');

let testsDb
let usersDb
let recordsDb
const unsubscribe=(interval)=>{
    
    clearInterval(interval);
}
const initConnection = async () => {
    const { domain, db_port, database_data_name, database_records_name, database_users_name } = process.env;
    // const interval  = setInterval(async()=>{
    // try {
            testsDb =  createConnection(`mongodb://${domain}:${db_port}/${database_data_name}`)
            usersDb =  createConnection(`mongodb://${domain}:${db_port}/${database_users_name}`)
            recordsDb =  createConnection(`mongodb://${domain}:${db_port}/${database_records_name}`)
            // unsubscribe(interval);
        // } catch (err) { }
    // },7000)
}
initConnection();
module.exports = { initConnection, testsDb, recordsDb, usersDb };