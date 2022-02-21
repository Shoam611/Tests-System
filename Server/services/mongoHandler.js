const { connect, disconnect } = require('mongoose');

const initConnection = async () => {

    const { domain, db_port, database_name } = process.env;
    connect(`mongodb://${domain}:${db_port}/${database_name}`);
}

module.exports = initConnection;
