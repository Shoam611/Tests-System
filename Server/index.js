//config
const config = require('config');
require("dotenv").config();
//envs
const port =  process.env.port ?  process.env.port : 3000 ;
//DI
require('./di-setup').setup();
//app
const app = require('./app');
//swagger
//(require('./swagger-setup.js')).setup(app)
//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));