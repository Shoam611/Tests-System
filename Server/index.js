//config
//.env
require("dotenv").config();
const port = process.env.port ?  process.env.port : 8080;
//logger
const {createLogger,testLogger} = require('./logger-configuration.js');
createLogger();
testLogger();
//DI
require('./app-container').setup();
//app
const app = require('./app');
//swagger//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));