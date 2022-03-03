const { connect } = require('mongoose');

const initConnection = async () => {

    const { domain, db_port, database_name } = process.env;
    setInterval(() => {
        try {
            await connect(`mongodb://${domain}:${db_port}/${database_name}`);
            break;
        } catch (err) {

        }
    }, 500)
}

module.exports = initConnection;
