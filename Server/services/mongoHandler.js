const mongoose = require('mongoose');

let connection
const initConnection = async () => {
    const { domain, db_port, database_name } = process.env;
        try { 
            connection = mongoose.createConnection(`mongodb://${domain}:${db_port}/${database_name}`)
            // connect(`mongodb://${domain}:${db_port}/${database_name}`);

        } catch (err) { console.log('error'); }
} 
initConnection();
module.exports = { initConnection, connection};
