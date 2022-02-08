//config
require("dotenv").config();
//const config = require('config');
//envs
const port = process.env.port ?  process.env.port : 8080;
//DI
require('./di-setup').setup();
//app
const app = require('./app');
//swagger
//(require('./swagger-setup.js')).setup(app)
//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));