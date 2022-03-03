const { connect } = require('mongoose');

const initConnection = async () => {
    const { domain, db_port, database_name } = process.env;
    // const interval = setInterval(async () => {
        try { connect(`mongodb://${domain}:${db_port}/${database_name}`);
            /* unregister()*/ console.log('connected');
        } catch (err) { console.log('error'); }
    // }, 7000);
    // const unregister = ()=>{console.log('unregistering interval'); clearInterval(interval)}
}
module.exports = initConnection;
